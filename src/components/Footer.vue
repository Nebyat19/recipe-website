<template>
 
  <footer class="absolute flex-col bottom-0 w-[100vw]  flex justify-center items-center">
    <img class="relative  w-full object-cover h-[80px]" :src="FOOTER_WAVE" alt="">
    <div class="flex items-baseline justify-center gap-3 absolute bottom-2 px-16">
        <div class="">
          <h1 class="text-xs font-semibold text-gray-300">Made with ❤️ by Hetu</h1>
        </div>
        <img class="h-8 w-auto" :src="WHITE_LOGO" alt="" />
    </div>
  </footer>
</template>

<script setup>
import { WHITE_LOGO,FOOTER_WAVE } from '@/lib/constants.js'

</script>
