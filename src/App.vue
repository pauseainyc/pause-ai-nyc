<template>
  <header>
    <div class="header-logo-container">
      <img class="header-logo" src="@/assets/pauseai_nyc_logo_full.svg" alt="Pause AI NYC logo" />
    </div>
    <div class="header-nav-desktop">
      <nav class="header-nav">
        <RouterLink class="header-nav-link" to="/">HOME</RouterLink>
        <RouterLink class="header-nav-link" to="/about">ABOUT US</RouterLink>
      </nav>
      <div id="social-media-icons">
        <a v-for="icon in socialMediaIcons" class="social-media-icon" :href="icon.url" :alt="icon.name" :title="icon.name">
          <svg>
            <use :href="`/icons/${icon.svg}.svg#logo`"></use>
          </svg>
        </a>
      </div>
    </div>
    <button class="header-nav-mobile-toggle" @click="toggleMobileNav()">Burg</button>
    <div v-if="showMobileNav" class="header-nav-mobile">
      <RouterLink class="header-nav-link" to="/">HOME</RouterLink>
      <RouterLink class="header-nav-link" to="/about">ABOUT US</RouterLink>
      <a v-for="icon in socialMediaIcons" class="social-media-icon" :href="icon.url" :alt="icon.name" :title="icon.name">
        <svg>
          <use :href="`/icons/${icon.svg}.svg#logo`"></use>
        </svg>
      </a>
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
</script>

<style scoped lang="scss">

header {
  position: fixed; 
  top: 0;
  width: 100vw;
  background-color: white;

  display: flex; 
  align-items: center;
  justify-content: left;

  height: 80px;
  border-bottom: 2px solid black;
  // opacity: 0.9;
}

.header-nav-desktop {
  background: red;
}
.header-nav-mobile-toggle {
  background: yellow;
  width: 50px;
  height: 50px;
  display: none;
}
.header-nav-mobile {
  background: blue;
  display: none;
}

.header-logo-container {
  height: 64px;
  margin: 0px 32px;
  .header-logo {
    height: 100%;
    margin: auto;
  }
}

.header-nav {
  nav {
    display: flex; 
  }
  a {
    font-weight: 900;
    letter-spacing: 0.3px;
    background-color: #FF942B;
    color: black;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 8px;
  }
  a:hover { background: none; }

  .router-link-active {
    color: #FF942B;
    background-color: black;

    &:hover {
      color: #FF942B;
      background-color: black;
    }
  }
}

.router-link-active {
  &:hover {
    background: none;
  }
}

#social-media-icons {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-right: 32px;
  margin-left: auto;

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

@media (max-width: 600px) {
  .header-nav-desktop {
    display: none;

  }
  .header-nav-mobile {
    display: block !important;
  }
  .header-nav-mobile-toggle {
    display: block !important;
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
