import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/DefaultLayout.vue'
import adminPage from "@/components/AdminLayout.vue"
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: () => import('../views/MealsByName.vue')
      },
      {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: () => import('../views/SearchByIngredients.vue')
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: () => import('../views/SearchByLetter.vue')
      }
    ]
  },
  {
    path:'/admin',
    component:adminPage,

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
