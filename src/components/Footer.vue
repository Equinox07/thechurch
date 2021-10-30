<template>
  <div class="bg-gray-700 text-white">
    <div class="py-28 border-b border-gray-400  max-w-6xl px-4 mx-auto">
      <div class="flex space-x-10">
        <div class="space-y-5 w-1/3">
          <div class="text-xl font-bold">News Letter</div>
          <div class="text-sm font-normal text-gray-200">
            Subscribe now to get 100 exclusive photo & two newsletters per month
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              class="
                w-full
                text-black text-sm
                font-normal
                outline-none
                border border-gray-200
                px-6
                py-3
                rounded-xl
                appearance-none
              "
            />
          </div>
        </div>

        <div class="space-y-5 w-1/3">
          <div class="text-xl font-bold">Movies Category</div>
          <div class="flex justify-between">
            <div class="space-y-2">
              <div class="text-sm font-normal text-gray-400">Action</div>
              <div class="text-sm font-normal text-gray-400">Adventure</div>
              <div class="text-sm font-normal text-gray-400">Animation</div>
              <div class="text-sm font-normal text-gray-400">Comdey</div>
            </div>
            <div class="space-y-2">
              <div class="text-sm font-normal text-gray-400">Crime</div>
              <div class="text-sm font-normal text-gray-400">Documentary</div>
              <div class="text-sm font-normal text-gray-400">Drama</div>
              <div class="text-sm font-normal text-gray-400">Family</div>
            </div>
            <div></div>
          </div>
        </div>

        <div class="space-y-5 w-1/3">
          <div class="text-xl font-bold">Moview Everywhere</div>
          <div class="grid grid-cols-2 gap-5">
            <div class="w-full h-12 bg-gray-500" v-for="n in 4" :key="n"></div>
          </div>
        </div>
      </div>
    </div>
    <div class=" py-8 flex justify-between max-w-6xl px-4 mx-auto">
      <div class=" flex space-x-5">
        <div class=" text-sm font-normal text-gray-400">About</div>
        <div class=" text-sm font-normal text-gray-400">Movies</div>
        <div class=" text-sm font-normal text-gray-400">Celebraties</div>
        <div class=" text-sm font-normal text-gray-400">News</div>
        <div class=" text-sm font-normal text-gray-400">Contact Us</div>
      </div>

      <div class=" text-sm font-normal text-gray-400">Copyright 2016 © Moview. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
