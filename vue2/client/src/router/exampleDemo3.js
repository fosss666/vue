import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ContainerView from "@/views/example14/ContainerView";
import LoginView from '@/views/example14/LoginView'
import NotFoundView from '@/views/example14/NotFoundView';
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:ContainerView
  },
  {
    path:'/login',
    component:LoginView
  },
  {
    path:'/404',
    component:NotFoundView
  },
]

const router = new VueRouter({
  routes
})

export default router
