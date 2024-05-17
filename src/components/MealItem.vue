<template>
  <div class="bg-white rounded-t-xl overflow-hidden border shadow">
    <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" alt="strMeal" class="h-48 w-full object-cover" />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
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
const props = defineProps({
  meal: Object
})
</script>
