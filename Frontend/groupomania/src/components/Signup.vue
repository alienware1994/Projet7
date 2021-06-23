<template>
<form class="box container is-max-desktop" @submit.prevent="handleSubmit">
  <div class="container mx-auto">
    <section>
        <b-field label="Name">
            <b-input v-model="username"></b-input>
        </b-field>

        <b-field label="Email"
            >
            <b-input type="email"
                value=""
                maxlength="30"
                v-model="email">
            </b-input>
        </b-field>

  

        <b-field label="Password">
            <b-input type="password"
                value=""
                password-reveal
                v-model="password">
            </b-input>
        </b-field>
        <b-field label="ConfirmPassword">
            <b-input type="password"
                value=""
                password-reveal
                v-model="password_confirmation">
            </b-input>
        </b-field>
        
          <button class="button is-primary" type="submit" >Sign In</button>
         
         <button class="button is-primary">Sign up</button>

    </section>
  </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterComponent",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    // Submit inscription + localstorage setup username, token etc
    handleSubmit: function () {
      const { username, email, password } = this;
      console.log({ username, email, password }, "CLD");
      if (this.password == this.password_confirmation) {
      axios
        .post("http://localhost:3000/api/auth/signup", {
          username,
          email,
          password,
        })
        .then((resp) => {
          
            console.log("resp", resp);
            localStorage.setItem("username", username);
            localStorage.setItem("UserToken", resp.data.token);
            localStorage.setItem("isAdmin", resp.data.isAdmin);
            localStorage.setItem("userId", resp.data.userId);
            axios.defaults.headers.common["Authorization"] = resp.data.token;
            this.$router.push("./accueil");
            alert("Bienvenue sur le site de Groupomania!");          
        })
        .catch((error) => {
          console.error(error);
        });
    }
    else {
      alert('Vos mots de passe ne correspondent pas')
    }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
