<template>
  <div id="blog-article">
    <div class="section">
      <div class="section-heading">{{ article.title }}</div>
      <div class="article-meta">By {{ article.author }} · {{ formattedDate }}</div>
      <div class="section-content">
        <p v-for="(paragraph, i) in paragraphs" :key="i" v-html="formatText(paragraph)"></p>
      </div>
      <RouterLink class="back-link" to="/blog">&larr; Back to Members Blog</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { blogArticles } from '@/data/blogArticles'

const article = blogArticles.find(a => a.slug === 'calling-all-members')!
const paragraphs = article.content.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
const formattedDate = new Date(article.date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

function formatText(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}
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
  .article-meta {
    font-size: 14px;
    color: #666;
    margin: 0 16px;
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
