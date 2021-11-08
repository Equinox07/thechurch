<template>
  <div class=" w-full flex overflow-x-auto slick-carousel">
      <div v-for="n in 8" :key="n" class=" w-1/5 flex-shrink-0">
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
.slick-carousel::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.slick-carousel {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>