 <!-- Connexion -->
<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand>Groupomania</b-navbar-brand>
       <b-navbar-nav class="ml-auto">
        <b-nav-item class="log" href="/login">Se connecter</b-nav-item>
        <b-nav-item class="sub" href="/signup">S'inscrire</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
//Navbar Login page
export default {
  name: "logins",
};
</script>

<style scoped>
.navbar {
  background-color: #FD4821}
h2 {
  border-bottom: black 1px solid;
  width: 35%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 30px;
}
.login {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 20%;
  padding-bottom: 30px;
}
.buttonsignup {
  width: 20%;
  margin-top: 30px;
}
button {
  background-color: #CA391A;
  color: white;
}
.log,.sub{
  color: white  ;
  font-size: 1.3rem;
  opacity: 1;
  z-index: 9999;
}
.sub{
  padding-left: 1em;
}
.log{
  border-right: white 1px solid;
  padding-right: 1em;
}
.navbar-light .navbar-brand {
    color: rgba(255, 255, 255, 0.9);
}
a{
  color: white !important;
}
</style>