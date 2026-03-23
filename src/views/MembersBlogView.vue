<template>
  <div id="blog">
    <div class="section">
      <div class="section-heading">Blog</div>
      <div class="section-content">
        <div v-for="article in blogArticles" :key="article.slug" class="article-preview">
          <RouterLink class="article-title" :to="`/blog/${article.slug}`">{{ article.title }}</RouterLink>
          <span class="article-meta">By {{ article.author }} · {{ new Date(article.date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
          <p class="article-excerpt">{{ getExcerpt(article.content) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { blogArticles, getExcerpt } from '@/data/blogArticles'
</script>

<style scoped lang="scss">
#blog {
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
  .article-meta {
    font-size: 13px;
    color: #888;
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
