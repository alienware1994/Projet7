<template>
<form class="box">
  <div class="field">
    <section>
     
        <b-field label="Email"
            >
            <b-input type="email"
                value=""
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                value="iwantmytreasure"
                password-reveal>
            </b-input>
        </b-field>
        
          <button class="button is-primary" >Sign in</button>
         

    </section>
  </div>
  </form>
</template>

<script>
export default {
  
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
