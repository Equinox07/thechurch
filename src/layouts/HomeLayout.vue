<template>
    <NavBar />
    <!-- <Header /> -->
    <div class=" pt-24 w-full">
      <router-view></router-view>
    </div>
    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import NavBar from '../components/NavBar.vue'
export default {
    components:{
        NavBar,
        Header,
        Footer
    }
}
</script>

<style>

</style>