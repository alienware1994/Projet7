import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../view/Login.vue'
import Home from '../view/Home.vue'


Vue.use(VueRouter)
const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem('UserToken')!= null) {
    next();
    return;
  }
  next();
}
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/accueil',
    name: "secure",
    component: Home,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
