import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "首页",
      path: '/',
      component: Home
    }
  ]
})

export default router
