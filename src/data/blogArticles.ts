import callingAllMembers from '@/data/blog/calling-all-members.json'

export interface BlogArticle {
  slug: string
  title: string
  author: string
  date: string
  content: string
}

export const blogArticles: BlogArticle[] = [
  callingAllMembers,
]

export function getExcerpt(content: string, maxLength = 200): string {
  if (content.length <= maxLength) return content
  return content.slice(0, maxLength).trimEnd() + '...'
}
