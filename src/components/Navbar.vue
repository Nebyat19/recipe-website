<template>
    

    <header class="bg-white shadow-sm h-16 flex items-stretch justify-between">
      <router-link :to="{ name: 'home', params: {} }" class="inline-flex items-center h-full px-5"
        >Home</router-link
      >
      <ul class="flex h-full gap-1">
        <li>
          <router-link
            :to="{ name: 'byName', params: {  } }"
            class="inline-flex transition-colors items-center px-2 h-full hover:bg-orange-300"
          >
            Search Meals
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'byLetter', params: {  } }"
            class="inline-flex transition-colors items-center px-2 h-full hover:bg-orange-300"
            >Meals By letter</router-link
          >
        </li> 
        <li>
          <router-link
            :to="{ name: 'byIngredient', params: {  } }"
            class="inline-flex transition-colors items-center px-2 h-full hover:bg-orange-300"
            >Meals by Ingredients</router-link
          >
        </li>
      </ul>
    </header>
</template>

<script setup>

</script>