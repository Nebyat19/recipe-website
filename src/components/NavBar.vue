<template>
  <header
   :class="{ 'hidden' : sideBarState.isSideBarHidden}" class="bg-gray-50 z-50  shadow-lg top-14 -left-5 fixed md:relative  md:left-0 text-sm text-gray-600 md:shadow-md items-end flex-col pl-10 py-5 m-10 max-h-56 md:flex justify-between"
  >
    <h1
      class="font-body w-full text-center text-secondary-100 font-bold uppercase border-b pb-1 border-green-100"
    >
      <span class="hover:text-gray-700">Search Meal By</span>
    </h1>
    <ul id="menu"  class="text-sm my-6  flex flex-col gap-4">
      <li class="hover hover:text-white rounded hover:bg-green-400  border-r-4 border-green-400">
        <router-link :to="{ name: 'byName', params: {} }" class="flex px-4 justify-end" href="#">
          <span class="font-bold">Meals Name</span>
          <img class="w-5 ml-2 font-bold" :src="SPOON_FORK" alt="" />
        </router-link>
      </li>
      <li class="hover hover:text-white rounded hover:bg-green-400 px-1">
        <router-link :to="{ name: 'byLetter', params: {} }" class="flex px-4 justify-end" href="#">
          <span class="">By Letter</span>
          <img class="w-5 ml-2 font-bold" :src="SPOON_FORK" alt="" />
        </router-link>
      </li>
      <li class="hover hover:text-white rounded hover:bg-green-400 px-1">
        <router-link :to="{ name: 'ingredient' }" class="flex px-4 justify-end" href="#">
          <span class="">Ingredients</span>
          <img class="w-5 ml-2 font-bold" :src="SPOON_FORK" alt="" />
        </router-link>
      </li>
    </ul>
  </header>
</template>

<li></li>

<script setup>
import { SPOON_FORK } from '@/lib/constants.js'
import {useSideBarState} from "@/stores/sideBarstate.js"
const sideBarState= useSideBarState()

</script>
