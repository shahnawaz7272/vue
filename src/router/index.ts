import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/txtip',
      name: 'textinterpolation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TextInterpolation.vue'),
    },
    {
      path: '/attrbind',
      name: 'attributebindiing',
      component: () => import('../views/AttributeBinding.vue'),
    },
  ],
})

export default router
