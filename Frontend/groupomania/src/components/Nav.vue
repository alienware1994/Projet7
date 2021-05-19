<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <b-image ratio="601by235"
                    :src="require('@/assets/icon-left-font.svg')"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                ></b-image>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
                  <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link to="signup" >
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    </router-link>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
export default {
    name: "Navigation"
}
</script>

<style>
    
</style>