<template>
  <div class="p-16 pb-0">
    <input
      v-model="keyword"
      type="text"
      name=""
      id=""
      placeholder="Search fror Meals"
      class="w-full p-3 rounded border-2 border-gray-200"
      @change="searchMeals"
    />

 <Meals :meals="meals"/>
 
  </div>
</template>

<script setup>
import { useRecipeStore } from '@/stores/RecipeStore.js'

import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import Meals from '@/components/Meals.vue'

const recipeStore = useRecipeStore()
const route = useRoute()
const keyword = ref('')
const meals = computed(() => recipeStore.getSearchedMeals)

const searchMeals = () => {
  if(keyword.value)
  recipeStore.searchMealsByName(keyword.value)
  else  recipeStore.setMealsByName([])
}
onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) searchMeals()
})
</script>
