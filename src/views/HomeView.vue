<template>
  <div class="px-16 py-5">
    <h1 class="text-4xl font-semibold">Random Meals</h1>
    <h3 class="text-sm font-bold text-gray-600">refresh to see more meals</h3>

    <Meals :meals="meals" />
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
onMounted(async () => {
  recipeStore.fetchRandomMeals(letter)
})
</script>
