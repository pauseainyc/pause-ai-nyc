<template>
  <div class="demo-page">
    <h1 class="page-heading">JailBreak</h1>

    <div class="controls">
      <div class="control-group">
        <label for="character-select">Character</label>
        <select id="character-select" v-model="selectedCharId" @change="onCharacterChange">
          <option value="" disabled>Select a character…</option>
          <option v-for="c in characters" :key="c.id" :value="c.id">{{ c.name }}</option>
        </select>
      </div>
      <div class="control-group">
        <label for="level-select">Level</label>
        <select id="level-select" v-model.number="selectedLevel" @change="onLevelChange">
          <option v-for="l in levelOptions" :key="l" :value="l" :disabled="l > (selectedCharacter?.current_level ?? 0)">
            Level {{ l + 1 }}{{ l > (selectedCharacter?.current_level ?? 0) ? ' (locked)' : '' }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="selectedCharacter" class="description-area content-box">
      <img :src="wizardPortrait" alt="Character portrait" class="character-portrait" />
      <strong>{{ selectedCharacter.name }}</strong> — Level {{ selectedCharacter.current_level }} / {{ selectedCharacter.total_levels }}
      <span v-if="selectedCharacter.completed" class="badge-completed">Completed</span>
      <p>{{ selectedCharacter.description }}</p>
      <p v-if="currentLevelDesc" class="level-desc">{{ currentLevelDesc }}</p>
    </div>

    <div class="chat-section content-box">
      <img :src="chatWizardSrc" alt="Wizard" class="chat-wizard" />
      <h2>Chat</h2>
      <div class="chat-messages" ref="chatMessagesEl">
        <div v-if="chatMessages.length === 0" class="chat-empty">Select a character and start chatting to extract the password.</div>
        <div v-for="(msg, i) in chatMessages" :key="i" :class="['chat-msg', msg.role]">
          <span class="chat-role">{{ msg.role === 'user' ? 'You' : 'AI' }}:</span>
          {{ msg.text }}
        </div>
      </div>
      <form class="chat-input" @submit.prevent="sendChat">
        <textarea
          v-model="chatInput"
          placeholder="Type your prompt…"
          :disabled="loading || !selectedCharId"
          rows="3"
          @keydown.enter.exact.prevent="sendChat"
        ></textarea>
        <button type="submit" :disabled="loading || !selectedCharId || (!chatInput.trim() && !lastPrompt)">
          {{ loading ? 'Sending…' : 'Send' }}
        </button>
      </form>
      <div v-if="duplicateWarning" class="duplicate-warning">{{ duplicateWarning }}</div>
    </div>

    <div class="guess-section content-box">
      <h2>Guess the Password</h2>
      <form class="guess-input" @submit.prevent="submitGuess">
        <input
          v-model="guessInput"
          type="text"
          placeholder="Enter your guess…"
          :disabled="loading || !selectedCharId"
        />
        <button type="submit" :disabled="loading || !selectedCharId || !guessInput.trim()">Submit</button>
      </form>
      <div v-if="guessResult" :class="['guess-result', guessResult.correct ? 'correct' : 'incorrect']">
        {{ guessResult.message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import wizardPortrait from '@/assets/demo/wizard-portrait.gif'
import wizardDefault from '@/assets/demo/wizard-default.gif'
import wizardThinking from '@/assets/demo/wizard-thinking.gif'
import wizardImpatient from '@/assets/demo/wizard-impatient.gif'

interface CharacterOut {
  id: string
  name: string
  description: string
  current_level: number
  total_levels: number
  completed: boolean
  level_descriptions: string[]
}

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

const characters = ref<CharacterOut[]>([])
const selectedCharId = ref('')
const chatMessages = ref<{ role: 'user' | 'assistant'; text: string }[]>([])
const chatInput = ref('')
const lastPrompt = ref('')
const guessInput = ref('')
const loading = ref(false)
const guessResult = ref<{ correct: boolean; message: string } | null>(null)
const chatMessagesEl = ref<HTMLElement | null>(null)
const usedPrompts = new Set<string>()
const chatWizardSrc = ref(wizardDefault)
let wizardResetTimer: ReturnType<typeof setTimeout> | null = null
let idleTimer: ReturnType<typeof setTimeout> | null = null

function resetIdleTimer() {
  if (idleTimer) clearTimeout(idleTimer)
  idleTimer = setTimeout(() => {
    if (chatWizardSrc.value === wizardDefault) {
      chatWizardSrc.value = wizardImpatient
      setTimeout(() => {
        if (chatWizardSrc.value === wizardImpatient) {
          chatWizardSrc.value = wizardDefault
        }
        resetIdleTimer()
      }, 6000)
    } else {
      resetIdleTimer()
    }
  }, 12000)
}

const selectedCharacter = computed(() =>
  characters.value.find((c) => c.id === selectedCharId.value) ?? null,
)

const selectedLevel = ref(0)

const currentLevelDesc = computed(() => {
  const char = selectedCharacter.value
  if (!char) return ''
  return char.level_descriptions?.[selectedLevel.value] ?? ''
})

const levelOptions = computed(() => {
  const char = selectedCharacter.value
  if (!char) return []
  return Array.from({ length: char.total_levels }, (_, i) => i)
})

function getToken(): string | null {
  return localStorage.getItem('jailbreak-token')
}

function saveToken(token: string) {
  localStorage.setItem('jailbreak-token', token)
}

async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  }
  const token = getToken()
  if (token) {
    headers['X-Session-Token'] = token
  }
  const res = await fetch(API_BASE + path, { ...options, headers })
  const returnedToken = res.headers.get('X-Session-Token')
  if (returnedToken) {
    saveToken(returnedToken)
  }
  return res
}

async function loadCharacters() {
  try {
    const res = await apiFetch('/api/characters')
    characters.value = await res.json()
  } catch (e) {
    console.error('Failed to load characters:', e)
  }
}

function onCharacterChange() {
  selectedLevel.value = selectedCharacter.value?.current_level ?? 0
  chatMessages.value = []
  guessResult.value = null
  chatInput.value = ''
  guessInput.value = ''
  lastPrompt.value = ''
}

function onLevelChange() {
  chatMessages.value = []
  guessResult.value = null
  lastPrompt.value = ''
}

async function scrollToBottom() {
  await nextTick()
  if (chatMessagesEl.value) {
    chatMessagesEl.value.scrollTop = chatMessagesEl.value.scrollHeight
  }
}

const duplicateWarning = ref('')

async function sendChat() {
  const prompt = chatInput.value.trim() || lastPrompt.value
  if (!prompt || !selectedCharId.value) return

  const promptKey = `${selectedCharId.value}:${selectedLevel.value}:${prompt}`
  if (usedPrompts.has(promptKey)) {
    duplicateWarning.value = 'You already sent this prompt. Try a different one.'
    return
  }
  usedPrompts.add(promptKey)
  duplicateWarning.value = ''

  lastPrompt.value = prompt
  chatInput.value = prompt
  chatMessages.value = [{ role: 'user', text: prompt }]
  loading.value = true
  if (wizardResetTimer) clearTimeout(wizardResetTimer)
  if (idleTimer) clearTimeout(idleTimer)
  chatWizardSrc.value = wizardThinking
  await scrollToBottom()

  try {
    const res = await apiFetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ character_id: selectedCharId.value, prompt, level: selectedLevel.value }),
    })
    const data = await res.json()
    chatMessages.value.push({ role: 'assistant', text: data.reply })
  } catch (e) {
    chatMessages.value.push({ role: 'assistant', text: 'Error: failed to get response.' })
  } finally {
    loading.value = false
    wizardResetTimer = setTimeout(() => {
      chatWizardSrc.value = wizardDefault
      resetIdleTimer()
    }, 8000)
    await scrollToBottom()
  }
}

async function submitGuess() {
  const guess = guessInput.value.trim()
  if (!guess || !selectedCharId.value) return

  loading.value = true
  guessResult.value = null
  resetIdleTimer()

  try {
    const res = await apiFetch('/api/guess', {
      method: 'POST',
      body: JSON.stringify({ character_id: selectedCharId.value, guess, level: selectedLevel.value }),
    })
    const data = await res.json()
    guessResult.value = { correct: data.correct, message: data.message }
    if (data.correct) {
      await loadCharacters()
      const char = selectedCharacter.value
      if (char && selectedLevel.value === char.current_level - 1) {
        selectedLevel.value = char.current_level
      }
    }
  } catch (e) {
    guessResult.value = { correct: false, message: 'Error: failed to submit guess.' }
  } finally {
    loading.value = false
    guessInput.value = ''
  }
}

onMounted(() => {
  loadCharacters()
  resetIdleTimer()
})
</script>

<style scoped lang="scss">
.demo-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.page-heading {
  text-align: center;
  font-size: 2rem;
  color: #0d0d0d;
}

.controls {
  display: flex;
  gap: 16px;

  .control-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
      font-weight: bold;
      font-size: 0.9rem;
    }

    select {
      padding: 8px 12px;
      border-style: solid;
      border-width: 10px;
      border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
      font-size: 1rem;
      background: #fff;
      appearance: auto;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}

.content-box {
  padding: 16px;
  border-style: solid;
  border-width: 10px;
  border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
}

.description-area {
  .character-portrait {
    float: right;
    width: 100px;
    height: auto;
    margin: 0 0 8px 12px;
  }

  p {
    margin: 8px 0 0;
    line-height: 1.6;
  }

  .level-desc {
    margin: 8px 0 0;
    font-style: italic;
    color: #666;
    line-height: 1.5;
  }

  .badge-completed {
    display: inline-block;
    background: #FF942B;
    color: #fff;
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 12px;
    margin-left: 8px;
    font-weight: bold;
  }
}

.chat-section {
  position: relative;

  .chat-wizard {
    position: absolute;
    top: -6px;
    right: -36px;
    width: 120px;
    height: auto;
  }

  h2 {
    margin: 0 0 12px;
    font-size: 1.2rem;
  }

  .chat-messages {
    max-height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
    padding: 8px;
    background: #fff;
    border-style: solid;
    border-width: 10px;
    border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
    min-height: 80px;
  }

  .chat-empty {
    color: #999;
    font-style: italic;
    margin: auto;
    text-align: center;
  }

  .chat-msg {
    line-height: 1.5;
    word-break: break-word;
    white-space: pre-wrap;

    .chat-role {
      font-weight: bold;
    }

    &.user {
      color: #0d0d0d;
    }

    &.assistant {
      color: #555;
    }
  }

  .chat-input {
    display: flex;
    gap: 8px;

    textarea {
      flex: 1;
      padding: 8px 12px;
      border-style: solid;
      border-width: 10px;
      border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
      font-size: 1rem;
      font-family: inherit;
      resize: vertical;
      min-height: 44px;

      &:disabled {
        opacity: 0.5;
      }
    }

    button {
      padding: 8px 20px;
      background: #FF942B;
      color: #fff;
      border-style: solid;
      border-width: 10px;
      border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      align-self: flex-end;

      &:hover:not(:disabled) {
        filter: brightness(90%);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .duplicate-warning {
    margin-top: 8px;
    padding: 8px 12px;
    border-style: solid;
    border-width: 10px;
    border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
    background: #fff3e0;
    color: #e65100;
    font-weight: bold;
  }
}

.guess-section {
  h2 {
    margin: 0 0 12px;
    font-size: 1.2rem;
  }

  .guess-input {
    display: flex;
    gap: 8px;

    input {
      flex: 1;
      padding: 8px 12px;
      border-style: solid;
      border-width: 10px;
      border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
      font-size: 1rem;

      &:disabled {
        opacity: 0.5;
      }
    }

    button {
      padding: 8px 20px;
      background: #FF942B;
      color: #fff;
      border-style: solid;
      border-width: 10px;
      border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;

      &:hover:not(:disabled) {
        filter: brightness(90%);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .guess-result {
    margin-top: 12px;
    padding: 8px 12px;
    border-style: solid;
    border-width: 10px;
    border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
    font-weight: bold;

    &.correct {
      background: #e8f5e9;
      color: #2e7d32;
    }

    &.incorrect {
      background: #fbe9e7;
      color: #c62828;
    }
  }
}

@media (max-width: 600px) {
  .controls {
    flex-direction: column;
  }

  .page-heading {
    font-size: 1.5rem;
  }
}
</style>
