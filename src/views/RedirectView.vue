<template>
  <div class="redirect">
    <h3>Redirecting you to another place...</h3>
    <img src="@/assets/spiral.gif"/>
  </div>
</template>

<script setup lang="ts">
window.location.href = 'https://pauseai.nyc'
</script>

<style scoped>
.redirect {
  display: block;
  gap: 16px;
  margin: 32px;
  text-align: center;
  img {
    margin: 16px;
  }
}
</style>
