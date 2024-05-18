<template>
  <div class="bg-white rounded-t-xl overflow-hidden border shadow">
    <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
   <div  class="bg-gray-100 h-48 relative">
  <img class="absolute h-48 top-0 z-0" :src="BLACK_LOGO"/>
    <span v-if="meal.strCategory" class="absolute top-2 left-2 px-3 py-2 text-xs rounded-lg bg-green-100 text-green-600">{{meal.strCategory}}</span>

  <img :src="meal.strMealThumb" alt="strMeal" class="absolute  z-50 h-48 w-full object-cover" />
   </div>
   
    </router-link>
    <div class="p-3">
      <h3 class="font-bold text-md text-gray-600">{{ meal.strMeal }}</h3>
      
      <p class="mb-4">
        {{ meal.strDescription }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from '@/components/YouTubeButton.vue'
import { BLACK_LOGO } from '@/lib/constants.js'
const props = defineProps({
  meal: Object
})
</script>
