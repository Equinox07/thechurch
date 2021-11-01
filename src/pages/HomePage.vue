<template>
  <div class="w-full pb-20">
    <div class="w-full">
      <Slider />
    </div>

    <div class="max-w-6xl mx-auto px-4 mt-14">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2
          py-5
          border-gray-100
        "
      >
        <div class="flex space-x-5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <div class="font-medium text-2xl">Spotlight This Month</div>
        </div>
        <div class="flex items-center space-x-2">
          <div class="text-sm font-normal text-gray-500 ">See all spotlight</div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div class="my-10">
        <Spotlight />
      </div>
    </div>

    <div class="my-10">
      <Trailers />
    </div>

    <div class="max-w-6xl mx-auto px-4 mt-14">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2
          py-5
          border-gray-100
        "
      >
        <div class="flex space-x-5 items-center">
          <div></div>
          <div class="font-medium text-2xl">News Feed</div>
        </div>
        <div class="text-sm font-normal text-gray-500">See all news</div>
      </div>

      <div class="flex space-x-10 mt-10">
        <div class="w-1/2">
          <div class="bg-gray-500 h-80"></div>
          <div class="mt-6">
            <button class="bg-red-400 text-white text-sm font-normal px-4 py-1">
              Movie
            </button>
            <div class="font-bold text-2xl mt-2">Movie Title here</div>
            <div class="mt-3 text-sm font-normal text-gray-600">
              04 Decemeber 2015
            </div>
          </div>
        </div>
        <div class="w-1/2 space-y-6">
          <div class="flex space-x-10" v-for="n in 4" :key="n">
            <div class="h-36 w-48 bg-gray-500"></div>

            <div>
              <button
                class="bg-red-400 text-white text-sm font-normal px-4 py-1"
              >
                Movie
              </button>
              <div class="font-bold text-2xl mt-2">Movie Title here</div>
              <div class="mt-3 text-sm font-normal text-gray-600">
                04 Decemeber 2015
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import Spotlight from "../session/spotlight.vue";
import Trailers from "../session/Trailers.vue";

export default {
  components: {
    Slider,
    Spotlight,
    Trailers,
  },
};
</script>

<style></style>
