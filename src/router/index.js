import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/productos',
    name: 'productos',

    component: ()=> import( /* webpackChunkName: "productos" */ '../views/Productos.vue'),  
    props: {
      producto:{
        nombre: "Desayunos",
        descripcion: "Contamos con desayunos nutritivos y deliciosos",
        precio: 2000,
        cantidad: "Para dos personas"
      }
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ()=> import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
