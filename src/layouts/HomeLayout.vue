<template>
    <NavBar />
    <div class=" pt-24 w-full">
      <router-view></router-view>
    </div>
    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
import NavBar from '../components/NavBar.vue'
export default {
    components:{
        NavBar,
        Footer
    }
}
</script>

<style>

</style>