import './assets/main.scss'

// pre-import all images to use dynamic image references (see social media icons)
import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
});

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
