import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/withData',
    name: 'WithData',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "withData" */ '../views/WithData.vue'),
  },
  {
    path: '/comp',
    name: 'Comp',
    component: () => import(/* webpackChunkName: "comp" */ '../views/Comp.vue'),
  },
  {
    path: '/brews',
    name: 'Brews',
    component: () => import('../views/Brews.vue'),
  },
  {
    path: '/brews-compare',
    name: 'BrewsCompare',
    component: () => import('../views/BrewsCompare.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
