import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/DefaultLayout.vue'
import adminPage from '@/components/AdminLayout.vue'

const routes = [
  {
    path: '/home',
    component: DefaultLayout,
    children: [ 
  
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: () => import('../views/MealsByName.vue')
      },
      //
      {
        path: '/ingredient',
        name: 'ingredient',
        component: () => import('../views/Ingredients .vue')
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
      },
      {
        path: '/meal/:id',
        name: 'mealDetail',
        component: () => import('../views/MealDetail.vue')
      },
      { path: '/404', name:'404', component:  () => import('../views/404Page.vue') },  
    ]
  },
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/LandingView.vue')
  },
  {
    path: '/admin',
    component: adminPage
  },
  
  { path: '/:catchAll(.*)', redirect:'404'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
