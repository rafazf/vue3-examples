import { createRouter, createWebHistory, type RouteLocationNormalized, type Router, useRoute } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  {
    path: '/destination/:id/:slug',
    name:'destination.show',
    component:()=>import('../views/DestinationShow.vue'),
    props:(route:RouteLocationNormalized) => ({id: parseInt(route.params.id+'')}),
  }
]
const index: Router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'linkActive',
})

export default index