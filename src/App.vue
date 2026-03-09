<template>
  <header>
    <div class="header-emblem">
      <img class="header-emblem-logo" src="@/assets/logo.png" alt="Pause AI NYC logo" />
      <div class="header-emblem-text">
        <span class="pause-ai-box"><span class="black">PAUSE</span><span class="orange">AI</span></span>
        <span class="orange" style="margin-left: 16px">    <span class="n-train">N</span>   <span class="y-train">Y</span>   <span class="c-train">C</span>  </span>
      </div>
    </div>
    <div id="social-media-icons">
      <a v-for="icon in socialMediaIcons" class="social-media-icon" :href="icon.url" :alt="icon.name" :title="icon.name">
        <svg>
          <use :href="`/socialMediaIcons/${icon.svg}`"></use>
        </svg>
      </a>
    </div>
    <nav id="header-nav">
      <RouterLink class="header-nav-link" to="/">Home</RouterLink>
      <!-- <div class="separator"></div> -->
    </nav>
  </header>
  <div id="router-view-container">
    <RouterView/>
  </div>
  <footer>
    <div id="copyright-statement">PauseAI NYC © 2026</div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const socialMediaIcons = [
  { name: 'Instagram', url: 'https://www.instagram.com/pauseainyc', svg: 'instagram.svg'},
  { name: 'X (Twitter)', url: 'https://x.com/PauseAINYC', svg: 'x.svg'},
  { name: 'Facebook Group', url: 'https://www.facebook.com/groups/pauseainyc/', svg: 'facebook.svg'},
]
</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px auto 0;
  align-items: center;
  padding: 24px 32px;
  background: linear-gradient(to bottom, #D0D0D0, #A0A0A0, #C0C0C0, #888888);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  max-width: 864px;
  width: 100%;
  box-sizing: border-box;
}
.header-emblem {
  display: flex;
  gap: 0;
  .header-emblem-logo {
    width: 80px;
    height: 80px;
    margin: auto;
    position: relative;
    z-index: 1;
  }
  .header-emblem-text, .header-emblem-text * {
    font-size: 42px;
    font-weight: bold;
    margin: auto;
    text-wrap: nowrap;
  }
  .header-emblem-text {
    margin-left: -42px;
  }
  .pause-ai-box {
    background: white;
    border-radius: 999px;
    padding: 0px 12px 0px 40px;
    .orange {
      color: #FF942B;
    }
    .black {
      color: #0D0D0D;
    }
  }
  .n-train, .y-train, .c-train {
    font-family: Helvetica, Arial, sans-serif;
  }
  .n-train {
    background: #FCCC0A;
    color: black;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: -2px;
  }
  .y-train {
    background: #FF6319;
    color: white;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding-bottom: 0px;
    margin-top: -2px;
  }
  .c-train {
    background: #0039A6;
    color: white;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding-bottom: 0px;
    padding-right: 0px;
    margin-top: -2px;
  }
}

#social-media-icons {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: auto;
  .social-media-icon {
    display: block;
    width: 32px;
    height: 32px;
    text-decoration: none;
    border-radius: 50%;
    padding: 4px;
    svg {
      width: 24px;
      height: 24px;
    }
    &:hover {
      svg {
        fill: #FF942B;
      }
    }
  }
}
nav {
  display: flex;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
}
.router-link-active {
  filter: brightness(80%);
  &:hover {
    background: none;
  }
}
#router-view-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  width: fit-content;
  padding: 32px 32px;
  margin: 16px auto 0;
}

footer {
  display: flex;
  #copyright-statement {
    font-weight: bold;
    padding: 8px;
    margin: auto;
  }
}

@media (max-width: 600px) {
  header {
    padding: 20px 20px 0 20px;
  }
  .header-emblem-logo {
    width: 50px !important;
    height: 50px !important;
  }
  .header-emblem-text, .header-emblem-text * {
    font-size: 32px !important;
  }
  #router-view-container {
    padding: 20px;
  }
}
</style>
