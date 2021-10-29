
<template>
  <router-view></router-view>
</template>
<script setup>
import FooterVue from "./components/Footer.vue";
import NavBarVue from "./components/NavBar.vue";
  components: {
    NavBarVue,
    FooterVue
  }
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<style>

</style>
