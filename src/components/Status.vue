<template>
    <div class="flex flex-col items-center justify-center ">
      <div v-if="isLoading" class="flex flex-col mt-5 items-center">
        <img :src="LOADER" alt="Loading..." />
        <span class="text-gray-600">Loading...</span>
      </div>
      <div v-else-if="error" class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L10 10.586 7.707 8.293a1 1 0 00-1.414 1.414l2.586 2.586a1 1 0 001.414 0l4.414-4.414z" clip-rule="evenodd" />
        </svg>
        <span class="text-red-600">{{ error }}</span>
      </div>
      <div v-else-if="!meals || meals.length === 0" class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-2 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 3a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3V6a3 3 0 00-3-3H5zM2 6a3 3 0 013-3h10a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V6zm6 5.293a1 1 0 111.414-1.414L11 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-2-2z" clip-rule="evenodd" />
        </svg>
        <span class="text-gray-600">No data available.</span>
      
      </div>
      <slot v-else></slot>
    </div>
  </template>
  
<script setup>
import { useRecipeStore } from '@/stores/RecipeStore';
import { computed } from 'vue';
import {LOADER} from "@/lib/constants.js"

const props = defineProps({
    meals: Array
})

const recipeStore = useRecipeStore()
const isLoading = computed(()=>recipeStore.loading)
const error = computed(()=>recipeStore.error)

console.log(isLoading,error)
</script>

