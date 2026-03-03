<template>
  <header>
    <div class="header-emblem">
      <img class="header-emblem-logo" src="@/assets/logo.png" alt="Pause AI NYC logo" />
      <div class="header-emblem-text">
        <span class="black">PAUSE</span>
        <span class="orange">AI NYC</span>
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
      <div class="separator"></div>
      <a class="header-nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSfatJka_oNOHB9t55OkhVKOYmqUAnqEqPdqBj9V6lrkTkZ2_g/viewform">Join Us!</a>
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
  margin: auto;
  align-items: center;
  padding: 32px 32px 0 32px;
}
.header-emblem {
  display: flex;
  gap: 8px;
  .header-emblem-logo {
    width: 64px;
    height: 64px;
    margin: auto;
  }
  .header-emblem-text, .header-emblem-text * {
    font-size: 42px;
    font-weight: bold;
    margin: auto;
    text-wrap: nowrap;
    .orange {
      color: #FF942B;
    }
    .black {
      color: #0D0D0D;
    }
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
  padding: 32px;
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
