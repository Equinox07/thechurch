<template>
    <div class="w-full border border-gray-100" style="height:450px">
      <div class="text-gray-900 w-full h-full">
        <div class=" h-full relative card-zoom bg-black group overflow-hidden">
        <div class=" card-zoom-text absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 cursor-pointer text-white opacity-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
          <img
            src="https://source.unsplash.com/random/350x350"
            alt=" random imgee"
            class="w-full h-full object-cover object-center card-zoom-image z-10"
          />
           <div class=" h-1/3 bg-gradient-to-t from-black absolute z-10 w-full bottom-0">
                <div class="w-full text-white p-10 card-zoom-text">
                    <div class=" flex space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="rgba(202, 138, 4)" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <div class=" text-sm font-normal">3/10</div>
                    </div>
                    <div class="text-2xl mt-1 font-semibold tracking-normal">Assasins</div>
                    <div class=" text-base text-white font-normal mt-2">Action, Drama, Romantic</div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.card-zoom-image {
  @apply w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover;
}
.card-zoom:hover .card-zoom-image {
  @apply scale-150 opacity-50;
}

.card-zoom-text{
  @apply transition-all duration-500 ease-in-out;
}

.card-zoom:hover .card-zoom-text{

}
</style>
