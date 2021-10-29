<template>
    <NavBar />
    <Header />
      <router-view></router-view>
    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import NavBarVue from '../components/NavBar.vue'
export default {
    components:{
        NavBar: NavBarVue,
        Header,
        Footer
    }
}
</script>

<style>

</style>