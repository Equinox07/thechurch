<template>
  <div>
      <Tabs :tabs="tabs" :selected="selected" @changeTab="changeTab"/>

      <div class=" flex space-x-1 mt-10">
          <div v-for="n in 4" :key="n" class="w-1/4">
            <MovieCard />
          </div>
      </div>
  </div>
</template>

<script>
import Tabs from '../components/Tabs.vue';
import MovieCard from '../components/MovieCard.vue'

export default {
    components:{
        Tabs,
        MovieCard
    },
    data(){
        return{
            tabs:[
                {
                    id:1,
                    name:"Latest"
                },
                {
                    id:2,
                    name:"Coming Soon"
                },
                {
                    id:3,
                    name:"Top Rated"
                },
                {
                    id:4,
                    name:"Latest Trailers"
                }
            ],
            selected:1
        }
    },
    methods : {
        changeTab(tab){
            this.selected = tab.id
        }
    }
}
</script>

<style>

</style>