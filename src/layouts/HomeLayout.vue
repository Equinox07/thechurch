<template>
    <header></header>
      <router-view></router-view>
  <footer></footer>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
    components:{
        Header,
        Footer
    }
}
</script>

<style>

</style>