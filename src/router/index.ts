import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RedirectView from '@/views/RedirectView.vue'
import KilianView from '@/views/KilianView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/qr0',
      name: 'redirect',
      component: RedirectView,
    },
    {
      path: '/kilian', 
      name: 'kilian',
      component: KilianView,
    },
  ],
})

export default router
