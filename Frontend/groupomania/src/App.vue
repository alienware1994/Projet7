<template>

  <div id="app">
      
    <Header /> 
    
   <router-view/>
  </div>
 
</template>

<script>
import axios from 'axios'
 import Navigation from './components/Nav'
import Header from './components/Header'
import Home from './view/Home.vue'
import login from './view/Login.vue'
import Signup from './components/Signup.vue'

export default {
  name: "app",
  created: function () {
    let token = localStorage.getItem("UserToken");
    axios.defaults.headers.common["Authorization"] = token;
  },
  components: {
    Header,
    Home,
    Signup,
    login,
     Navigation
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
