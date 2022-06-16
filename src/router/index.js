import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../pages/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-new-book',
    name: 'AddNewBook', 
    component: () => import('@/pages/AddNewBook.vue')
  },
  {
    path: '/book-list',
    name: 'BookList', 
    component: () => import('@/pages/BookList.vue')
  },
  {
    path: '/get-from-user',
    name: 'GetFromUser', 
    component: () => import('@/pages/GetFromUser.vue')
  },
  {
    path: '/set-to-user',
    name: 'SetToUser', 
    component: () => import('@/pages/SetToUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
