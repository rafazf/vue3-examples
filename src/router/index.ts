import { createRouter, createWebHistory, type Router } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Brasil from '../views/Brasil.vue'
import Jamaica from '../views/Jamaica.vue'
import Hawaii from '../views/Hawaii.vue'
import Panama from '../views/Panama.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/brasil', name: 'Brasil', component: Brasil },
  { path: '/panama', name: 'Panama', component: Panama },
  { path: '/hawaii', name: 'Hawaii', component: Hawaii },
  { path: '/jamaica', name: 'Jamaica', component: Jamaica }
]
const index: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default index