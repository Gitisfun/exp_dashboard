import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Transactions from '../views/Transactions.vue'
import Categories from '../views/Categories.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      group: "Login",
      requiresAuth: false,
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      group: "Home",
      requiresAuth: true,
    },
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions,
    meta: {
      group: "Transactions",
      requiresAuth: true,
    },
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: {
      group: "Categories",
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
