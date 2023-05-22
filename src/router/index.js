import { createRouter, createWebHistory } from 'vue-router'
const HomeIndex = () => import('../pages/home/HomeIndex.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
   { path: '/', component: HomeIndex },
  ],
})

 export default router