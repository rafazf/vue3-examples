import { createRouter, createWebHistory, type Router } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  {path: '/destination/:id',name:'destination.show', component:()=>import('../views/DestinationShow.vue')}
]
const index: Router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'linkActive',
})

export default index