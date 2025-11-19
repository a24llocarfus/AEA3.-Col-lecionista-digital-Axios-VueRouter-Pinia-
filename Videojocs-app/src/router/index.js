// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// importar components o usar lazy-loading
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Favorites from '../views/Favorites.vue'
import ItemDetail from '../views/ItemDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/search', name: 'Search', component: Search },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  // ruta dinàmica per al detall
  {
    path: '/item/:id',
    name: 'ItemDetail',
    component: ItemDetail,
    props: true  // passa :id com a prop al component
  },
  // opcional: redirecció o 404
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(), // usa l'API History per URLs "normals"
  routes
})

export default router