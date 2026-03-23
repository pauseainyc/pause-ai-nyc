<template>
  <div id="members-blog">
    <div class="section">
      <div class="section-heading">Members Blog</div>
      <div class="section-content">
        <div class="article-preview">
          <RouterLink class="article-title" to="/blog/calling-all-members">Calling All Members: We Want to Hear Your Voice!</RouterLink>
          <p class="article-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
#members-blog {
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
    margin: 0 16px;
    padding: 10px;
    border-style: solid;
    border-width: 10px;
    border-image: url(/icons/doodle-border.svg) 10 10 10 10 stretch stretch;
  }
}
.article-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  &:hover {
    background-color: rgba(255, 148, 43, 0.05);
  }
  .article-title {
    font-size: 18px;
    font-weight: bold;
  }
  .article-excerpt {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
}

@media (max-width: 600px) {
  .section {
    .section-heading {
      font-size: 18px;
    }
  }
}
</style>
