<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="title">
      <img alt="Pause AI NYC logo" class="logo" src="@/assets/logo.png" width="64" height="64"/>
      <div class="greetings">
        <h1 class="orange">Pause AI NYC</h1>
      </div>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/qr0">Join Us!</RouterLink>
    </nav>
  </header>
  <RouterView/>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  align-items: center;
}
.title {
  display: flex;
  gap: 8px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
