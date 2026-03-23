<template>
  <div id="blog-article">
    <div class="section">
      <div class="section-heading">Calling All Members: We Want to Hear Your Voice!</div>
      <div class="section-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nec gravida arcu fermentum sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
      </div>
      <RouterLink class="back-link" to="/blog">&larr; Back to Members Blog</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
#blog-article {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
  line-height: 1.6;
  margin: 0 auto;
}
.section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  .section-heading {
    font-size: 24px;
  }
  .section-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 12px;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    margin: 0 16px;
  }
}
.back-link {
  margin: 0 16px;
}

@media (max-width: 600px) {
  .section {
    .section-heading {
      font-size: 18px;
    }
  }
}
</style>
