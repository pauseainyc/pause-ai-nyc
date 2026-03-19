<template>
  <header>
    <img class="header-logo" src="@/assets/pauseai_nyc_logo_full.svg" alt="Pause AI NYC logo" />
    <div id="social-media-icons">
      <a v-for="icon in socialMediaIcons" class="social-media-icon" :href="icon.url" :alt="icon.name" :title="icon.name">
        <svg>
          <use :href="`/icons/${icon.svg}.svg`"></use>
        </svg>
      </a>
    </div>
    <nav id="header-nav">
      <RouterLink class="header-nav-link" to="/">Home</RouterLink>
      <RouterLink class="header-nav-link" to="/about">About Us</RouterLink>
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
  { name: 'Instagram', url: 'https://www.instagram.com/pauseainyc', svg: 'instagram'},
  { name: 'X (Twitter)', url: 'https://x.com/PauseAINYC', svg: 'x'},
  { name: 'Facebook Group', url: 'https://www.facebook.com/groups/pauseainyc/', svg: 'facebook'},
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
.header-logo {
  height: 100px;
  margin: auto;
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
  .header-logo {
    height: unset;
    max-height: 100px;
    width: 100%;
  }
  #router-view-container {
    padding: 20px;
  }
}
</style>
