export interface BlogArticle {
  slug: string
  title: string
  author: string
  date: string
  content: string
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'calling-all-members',
    title: 'Calling All Members: We Want to Hear Your Voice!',
    author: 'Ian Nielsen',
    date: '2026-03-23',
    content: "Welcome to our members blog! As the inaugural poster, I feel it necessary to explain why we want to do this. I feel lucky that I am able to participate directly with all of our members on AI-related news, philosophy, organizing, and theory-of-change on a regular and ongoing basis. During these discussions I have learned a lot and evolved my own worldview significantly. However, we currently have no way of spreading these discussions into the broader world. That's where this blog comes in. \n\n The goal of this blog is to allow members to voice their ideas and stimulate discussion. No matter how long or short you want the article to be, we are open to all of it. The only ground rules are as follows: \n\n (1) No AI writing or editing. We want this blog to be by humans, for humans. Even if that means the writing might be a little rough around the edges. \n\n (2) You must be a member to post. (Member: must have attended at least three PauseAI NYC events in the past four months.) \n\n (3) Have fun! We are doing this to fight for a future worth living in! Any future that I am willing to fight for must be fun. That's what I believe in. \n\n ",
  },
]

export function getExcerpt(content: string, maxLength = 200): string {
  if (content.length <= maxLength) return content
  return content.slice(0, maxLength).trimEnd() + '...'
}
