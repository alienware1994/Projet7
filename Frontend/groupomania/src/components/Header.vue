<template>
<header>
    <b-image class="image is-128x128 center"
            :src="require('@/assets/icon-above-font.png')"
            alt="The Buefy Logo"
            
            size="256x256"
            :rounded="rounded"
        ></b-image> 
    </header>
</template>

<script>
export default {
    name: "header",
}
</script>

<style scoped>
#b-image {
    size: 60%;
}
</style>