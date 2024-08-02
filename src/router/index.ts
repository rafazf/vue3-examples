import { createRouter, createWebHistory, type Router } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/brazil', name: 'Brasil', component: () => import('../views/Brasil.vue') },
  { path: '/panama', name: 'Panama', component: () => import('../views/Panama.vue') },
  { path: '/hawaii', name: 'Hawaii', component: () => import('../views/Hawaii.vue') },
  { path: '/jamaica', name: 'Jamaica', component: () => import('../views/Jamaica.vue') },
  {path: '/destination/:id',component:()=>import('../views/DestinationShow.vue')}
]
const index: Router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'linkActive',
})

export default index