<template>

  <div id="app">
     <Navigation />
      <Home />
    <Header />
   <router-view/>
  </div>
 
</template>

<script>
import Navigation from './components/Nav'
import Header from './components/Header'
import Home from './view/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Signup,
    Login,
    Navigation
  }
}
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
