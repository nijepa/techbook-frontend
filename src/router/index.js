import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "about" */ '../views/NotFound.vue'),
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import( /* webpackChunkName: "about" */ '../views/LogInUp.vue'),
  },
  {
    path: '/abo',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import( /* webpackChunkName: "about" */ '../views/Test.vue'),
  },
  {
    path: '/front',
    name: 'Front',
    component: () => import( /* webpackChunkName: "article" */ '../views/Front.vue'),
    children: [{
        path: '/main',
        name: 'Main',
        component: () => import( /* webpackChunkName: "about" */ '../views/Main.vue'),
      },
      {
        path: '/article',
        name: 'Article',
        component: () => import( /* webpackChunkName: "about" */ '../views/Article_actions.vue'),
      },
      {
        path: '/fields',
        name: 'Fields',
        component: () => import( /* webpackChunkName: "about" */ '../components/tech/Fields.vue'),
      },
      {
        path: '/lang',
        name: 'Lang',
        component: () => import( /* webpackChunkName: "about" */ '../views/Lang_actions.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router