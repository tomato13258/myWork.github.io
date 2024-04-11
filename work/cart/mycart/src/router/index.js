import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeView2 from '../views/HomeView-2.vue'
import cartPage from '../views/cartPage.vue'
import cartPageInput from '../views/cartPageInput.vue'
import endPage from '../views/endPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home2',
      name: 'home2',
      component: HomeView2,
    },
    {
      path: '/cartPage',
      name: 'cartPage',
      component: cartPage,
    },
    {
      path: '/cartPageInput',
      name: 'cartPageInput',
      component: cartPageInput,
    },
    {
      path: '/endPage',
      name: 'endPage',
      component: endPage,
    },
  ]
})

export default router
