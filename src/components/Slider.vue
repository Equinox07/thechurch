<template>
  <div class=" w-full flex">
      <div v-for="n in 5" :key="n" class=" w-1/5">
        <MovieCard />
      </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
export default {
    components:{
        MovieCard
    }
}
</script>

<style>

</style>