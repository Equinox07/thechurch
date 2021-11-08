<template>
    <div>
        <div class=" h-56 bg-hero-pattern bg-no-repeat bg-cover w-full">
            <div class="max-w-6xl mx-auto px-4 h-full flex items-center">
                <div class=" text-2xl font-bold text-white">Movies</div>
            </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 h-full my-24">
            <div class=" flex space-x-7">
                <div v-for="num in alpha" :key="num" class=" uppercase text-lg font-thin" :class="num === 'All'? ' border-b-2 border-orange-400':''">{{num}}</div>
            </div>

            <div class=" grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 mt-20">
                <MovieCard v-for="n in 12" :key="n"/>
            </div>
        </div>
    </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
const alpha = ['All','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

export default {
    components:{
        MovieCard
    },
    setup () {
        return {
            alpha
        }
    }
}
</script>

<style lang="scss" scoped>

</style>