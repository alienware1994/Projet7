 

<template>
   
<form class="box container is-max-desktop" @submit.prevent="login">
    <logins />
  <div class="field">
    <section>
     
        <b-field label="Email"
            >
            <b-input type="email"
                v-model="email"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>
        
          <router-link to="signup">
          <button class="button is-primary" >Pas encore inscrit ? </button>
         </router-link>

         <button  class="button is-primary" type="submit">Se connecter</button>
         

    </section>
  </div>
  </form>
</template>

<script>
import axios from 'axios';
 import logins from '../components/Logins';


export default {
  name: "login",
  components: { logins },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      const { email, password } = this;
      console.log(email, password, "CLD");

      axios
      .post("http://localhost:3000/api/auth/login", {email, password})
      .then((resp) => {
        console.log("resp", resp);
        localStorage.setItem("UserToken", resp.data.token);
        localStorage.setItem("username", resp.data.username);
        localStorage.setItem("isAdmin", resp.data.isAsmin);
        localStorage.setItem("userId", resp.data.userId);
        axios.defaults.headers.common["Authorization"] =
        resp.data.token;
        this.$router.push("./accueil");
      })
      .catch((err) => {
        console.log("err", err);
        alert("Utilisateur introuvable");
      });
    },
  },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
