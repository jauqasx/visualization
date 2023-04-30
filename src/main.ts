import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import directives from '@/directives/index'
const app = createApp(App)

app.use(directives)
app.use(createPinia())
app.use(router)
app.mount('#app')
