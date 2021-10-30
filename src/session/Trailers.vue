<template>
  <div class="mt-80 bg-gray-200">
    <div class="mx-auto max-w-6xl px-4 py-20 h-full">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2
          py-5
          border-gray-500
        "
      >
        <div class="flex space-x-5 items-center">
          <div></div>
          <div class="font-medium text-2xl text-white">Trailers and Videos</div>
        </div>
        <div class="text-sm font-normal text-white">See all trailers & videos</div>
      </div>

      <div class=" w-full bg-gray-500 mt-10" style="height:80vh;">

      </div>

      <div class=" flex space-x-10 mt-10">
          <div class=" bg-gray-500 h-40 w-1/4" v-for="n in 4" :key="n">

          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.parallex {
  background-image: url("https://source.unsplash.com/random/350x350");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
