<template>
<div>
  <h1>Bienvenue</h1>
  <div id="secure">
    <Nav />
    
    <div :key="item.id" v-for="item in posts">
      <usersposts v-bind:post="item" />
    </div>
  </div>
</div>
</template>

<script>

import axios from "axios";
import Nav from "../components/Nav";

export default {
  name: "secure",
 
  components: { Nav },
  mounted() {
    axios.get("http://localhost:3000/api/posts").then((resp) => {
      this.$store.dispatch("SETPOSTS", resp.data.posts);
    });
  },
};
</script>

// <script>
// import Login from '@/view/Login.vue'
// export default {
//     name: 'Home',
//     components: {
//       Login
//     }

// }
// </script>

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
