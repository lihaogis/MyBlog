import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HelloMap from '../views/01GetStart/HelloMap.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
        path: '/HelloMap',
        name: 'HelloMap',
        component: () => import('../views/01GetStart/HelloMap.vue')
    }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/HelloMap',
  //   name: 'HelloMap',
  //   component: () => import('../views/01GetStart/HelloMap.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
