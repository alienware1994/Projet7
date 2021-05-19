<template>
<form class="box">
  <div class="container mx-auto">
    <section>
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Job">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email"
            >
            <b-input type="email"
                value=""
                maxlength="30"
                v-model="email">
            </b-input>
        </b-field>

        <b-field label="Username"
            >
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                value="iwantmytreasure"
                password-reveal
                v-model="password">
            </b-input>
        </b-field>
        <router-link to="signup">
          <button class="button is-primary" @click="signup">Sign In</button>
         </router-link>
         <button class="button is-primary">Sign up</button>

    </section>
  </div>
  </form>
</template>

<script>
// export default {
//   name: 'Home',
//   props: {
//     msg: String
//   }
// }
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },

methods: {
  signup () {
    console.log('register button was clicked', this.email)
  }
}
}
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
