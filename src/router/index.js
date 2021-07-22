import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/front',
    name: 'Front',
    component: () => import(/* webpackChunkName: "article" */ '../views/Front.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: '/languages',
        name: 'Languages',
        component: () =>
          import(/* webpackChunkName: "client" */ '../views/Front.vue'),
      },
    ]
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '../views/Article_actions.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
