<template>
  <div class="px-16 py-5">
    <h2 class="text-gray-600 font-medium text-xl md:text-3xl">Random Meals</h2>
    <h3 class="text-xs flex gap-3 font-bold text-green-500">Refresh to see more meals <span @click="refresh()" class=" cursor-pointer"><svg class="w-5 h-5" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></span></h3>
    <h4 class="font-bold mt-10 pb-2 border-b border-gray-200">Latest Recipes</h4>
    <Meals :meals="meals" />



    <div class="flex justify-center">
        <div @click="refresh()"  class="px-3 py-2 border border-green-600 text-green-600 rounded-lg cursor-pointer ">See more</div>
      </div>  
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import Meals from '@/components/Meals.vue'
import { useRecipeStore } from '@/stores/RecipeStore'
import { useRandomLetter } from '@/hooks/randomLetter.js'

const meals = computed(() => recipeStore.meals)
const recipeStore = useRecipeStore()
const letter = useRandomLetter()
const refresh=()=>{
  recipeStore.fetchRandomMeals(useRandomLetter())
}
onMounted(async () => {
  recipeStore.fetchRandomMeals(letter)
})
</script>
