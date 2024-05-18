<template>
  <div class="flex  py-3 items-center bg-gray-50 shadow-md px-10 md:px-16 justify-between">
   <div class="flex items-baseline gap-2"> <span class="md:hidden" @click="toggleSate()">
        <svg class="w-7 h-8 hover:text-green-600" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
      </span>
    <div class="relative  w-28 h-14"> 
     
      <img class="absolute w-full h-full top-0 object-center" :src="MAIN_LOGO" alt=""></div></div>
   
    <div>
      <ul class="text-md   font-bold text-green-700 flex gap-5">
        <li class=" hover:text-green-200"> <router-link
          :to="{ name: 'home', params: {} }">Home</router-link></li>
        <li class=" cursor-pointer"><svg class="w-5 h-5   hover:text-gray-900" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></li>
      </ul>
    </div>

  </div>


</template>

<li></li>

<script setup>

import {MAIN_LOGO} from "@/lib/constants.js"
import {useSideBarState} from "@/stores/sideBarstate.js"
const sideBarState= useSideBarState()
const toggleSate=()=>{
  sideBarState.toggleSate()
  
}
</script>
