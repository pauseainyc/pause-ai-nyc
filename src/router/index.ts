import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import RedirectView from '@/views/RedirectView.vue'
import MembersBlogView from '@/views/MembersBlogView.vue'
import CallingAllMembersArticle from '@/views/blog/CallingAllMembersArticle.vue'
import DemoView from '@/views/DemoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: MembersBlogView,
    },
    {
      path: '/blog/calling-all-members',
      name: 'calling-all-members',
      component: CallingAllMembersArticle,
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoView,
    },
    {
      path: '/qr0',
      name: 'redirect',
      component: RedirectView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { 
        el: to.hash,
        behavior: 'smooth' 
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        left: 0
      }
    }
  }
})

export default router
