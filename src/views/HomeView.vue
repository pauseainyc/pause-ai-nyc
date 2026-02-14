<template>
  <div class="home">
    <h1>Welcome!</h1>
    <h3>Pause AI NYC is a regional chapter of <a href="https://www.pauseai-us.org/" target="_blank" rel="noopener noreferrer">Pause AI US</a>, a 501(c)3 organization advocating for a global pause on developing cutting-edge AI models until their safety can be guaranteed.</h3>
    <TheLinkTree />
  </div>
</template>

<script setup>
  import TheLinkTree from '@/components/TheLinkTree.vue'
</script>

<style scoped>
.home {
  display: block;
  gap: 16px;
  margin: 32px;
  text-align: center;
  img {
    margin: 16px;
  }
}
</style>
