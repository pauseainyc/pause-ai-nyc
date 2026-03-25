import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import clickOutside from '@/directives/clickOutside'

createApp(App)
.use(createPinia())
.use(router)
.directive('click-outside', clickOutside)
.mount('#app')