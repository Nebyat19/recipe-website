<template>
  <header class="bg-white items-end flex-col shadow-sm h-16 flex  justify-between">
    <router-link :to="{ name: 'home', params: {} }" class="inline-flex items-center h-full px-5"
      >Home</router-link
    >
    <ul class="flex flex-col h-full gap-1">
      <li>
        <router-link
          :to="{ name: 'byName', params: {} }"
          class="inline-flex transition-colors items-center px-2 h-full hover:bg-orange-300"
        >
          Search Meals
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'byLetter', params: {} }"
          class="inline-flex transition-colors items-center px-2 h-full hover:bg-orange-300"
          >Meals By letter</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'ingredient' }"
          class="inline-flex transition-colors items-center px-2 h-full hover:bg-orange-300"
          > Ingredients</router-link
        >
      </li>
    </ul>
  </header>


</template>

<li></li>

<script setup></script>
