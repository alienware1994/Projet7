import Vue from "vue";
import Router from "vue-router";
import signup from "../views/signup";
import login from "../views/login";
import secure from "../views/secure"
import store from "../store";

Vue.use(Router);
// Code pour sécuriser la page d'acceuil quand on est pas connecté
const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem('UserToken')!= null) {
    next();
    
  } else {
    next("/");
  }
  
};
// Code pour sécuriser les pages login et signup quand on est connecté 
const ifNotAuthenticated = (to, from, next) => {
  if (localStorage.getItem('UserToken')!= null) {
    next("/accueil");
    
  } else {
    next();
  }
  
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/accueil",
      name: "secure",
      component: secure,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/login",
      name: "login",
      component: login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/signup",
      name:"signup",
      component: signup,
      beforeEnter: ifNotAuthenticated
    }
  ]
});