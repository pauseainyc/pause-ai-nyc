<template>
  <header>
    <div class="header-logo-container">
      <img class="header-logo" src="@/assets/pauseai_nyc_logo_full.svg" alt="Pause AI NYC logo"/>
    </div>
    <div class="header-nav-desktop">
      <nav class="header-nav-desktop-links">
        <RouterLink class="header-nav-link" to="/">HOME</RouterLink>
        <RouterLink class="header-nav-link" to="/about">ABOUT US</RouterLink>
        <RouterLink class="header-nav-link" to="/blog">BLOG</RouterLink>
        <RouterLink class="header-nav-link" to="/demo">DEMO</RouterLink>
      </nav>
      <div class="header-nav-desktop-icons">
        <a v-for="icon in socialMediaIcons" class="social-media-icon" :href="icon.url" target="_blank" :alt="icon.name" :title="icon.name">
          <img :src="`/icons/${icon.svg}.svg`">
        </a>
      </div>
    </div>
    <div class="header-nav-mobile" v-click-outside="hideMobileNav">
      <button class="header-nav-mobile-toggle" :class="showMobileNav ? 'toggle-active' : ''" @click="toggleMobileNav()">
        <img src="/icons/bars.svg">
      </button>
      <div v-if="showMobileNav" class="header-nav-mobile-menu">
        <RouterLink class="header-nav-link" to="/" @click="hideMobileNav()">HOME</RouterLink>
        <hr>
        <RouterLink class="header-nav-link" to="/about" @click="hideMobileNav()">ABOUT US</RouterLink>
        <hr>
        <RouterLink class="header-nav-link" to="/blog" @click="hideMobileNav()">BLOG</RouterLink>
        <hr>
        <RouterLink class="header-nav-link" to="/demo" @click="hideMobileNav()">DEMO</RouterLink>
        <hr>
        <div class="header-nav-mobile-icons">
          <a v-for="icon in socialMediaIcons" class="social-media-icon" :href="icon.url" target="_blank" :alt="icon.name" :title="icon.name">
            <img :src="`/icons/${icon.svg}.svg`">
          </a>
        </div>
      </div>
    </div>
  </header>
  <div id="router-view-container">
    <RouterView/>
  </div>
  <footer>
    <div class="skyline-img-container">
      <img class="skyline-img" src="@/assets/nyc-skyline.png" alt="NYC skyline pixel art" />
    </div>
    <div id="copyright-statement">PauseAI NYC © 2026</div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const socialMediaIcons = [
  { name: 'Instagram', url: 'https://www.instagram.com/pauseainyc', svg: 'instagram'},
  { name: 'X (Twitter)', url: 'https://x.com/PauseAINYC', svg: 'x'},
  { name: 'Facebook Group', url: 'https://www.facebook.com/groups/pauseainyc/', svg: 'facebook'},
]

const showMobileNav = ref(false)

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value
}
const hideMobileNav = () => {
  showMobileNav.value = false;
}
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000 !important;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
  background: white;
  border-bottom: 2px solid black;
}

.header-logo-container {
  margin-right: 32px;
  aspect-ratio: 23/5;
  .header-logo {
    height: 100%;
    width: 100%;
  }
}

.header-nav-desktop {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  .header-nav-desktop-links {
    display: flex;
    gap: 8px;
    align-items: center;
    a.header-nav-link {
      height: 32px;
      font-weight: bold;
      color: black;
      background: #FF942B;
      padding: 4px 8px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      margin-bottom: 1px;
      &:hover {
        filter: brightness(0.95)
      }
    }
    a.router-link-active {
      color: #FF942B;
      background: black;
      border-bottom: none;
      margin-bottom: unset;
    }
  }
  .header-nav-desktop-icons {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.social-media-icon {
  display: block;
  width: 40px;
  height: 40px;
  text-decoration: none;
  border-radius: 25%;
  padding: 8px;
  background: none;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background: rgba(255, 148, 43, 0.2);
  }
}

.header-nav-mobile {
  display: none;
  .header-nav-mobile-toggle {
    background: none;
    display: none;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 25%;
    cursor: pointer;
    img {
      width: 32px;
      height: 32px;
    }
    &.toggle-active {
      border: 2px solid black;
    }
    &:hover {
      background: rgba(0,0,0,0.05);
    }
  }
  .header-nav-mobile-menu {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 8px;
    border-bottom: 2px solid black;
    a.header-nav-link {
      height: 32px;
      font-weight: bold;
      color: black;
      border-radius: 4px;
      padding: 4px 8px;
      &:hover {
        filter: brightness(0.95)
      }
    }
    a.router-link-active {
      color: #FF942B;
    }
  }
  .header-nav-mobile-icons {
    width: 100%;
    display: flex;
    gap: 8px;
  }
}

#router-view-container {
  margin-top: 80px;
  padding: 32px;
}

footer {
  display: flex;
  flex-direction: column;
  .skyline-img-container {
    margin: auto;
    img {
      height: 80px;
      width: auto;
    }
  }
  #copyright-statement {
    font-weight: bold;
    padding: 8px;
    margin: auto;
  }
}

@media (max-width: 768px) {
  header {
    padding: 8px;
    height: 60px;
  }
  .header-logo-container {
    margin-right: 16px;
  }
  .header-nav-desktop {
    display: none;
  }
  .header-nav-mobile {
    display: inherit;
    .header-nav-mobile-menu {
      top: 60px;
    }
    .header-nav-mobile-toggle {
      display: flex !important;
    }
  }
  #router-view-container {
    margin-top: 60px;
    padding: 20px;
  }
}
</style>
