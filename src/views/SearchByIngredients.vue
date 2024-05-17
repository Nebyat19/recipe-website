<template>
  <div class="px-16 py-5 ">
    <Meals :meals="meals"/>
  </div>

</template>

<script setup>

import { useRecipeStore } from '@/stores/RecipeStore'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import Meals from "@/components/Meals.vue"
const recipeStore = useRecipeStore()
const meals = computed(()=>recipeStore.mealsByIngredients)
const route = useRoute()
onMounted(()=>{

  recipeStore.searchMealsByIngredients(route.params.ingredient)
})
</script>
