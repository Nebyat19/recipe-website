<template>
  <div class="p-8">
    <h1 class="text-4xl front-bold mb-4">Ingredient</h1>
    <input
      v-model="keyword"
      type="text"
      name=""
      id=""
      placeholder="Search fror Ingredients"
      class="w-full p-3 mb-3 rounded border-2 border-gray-200"
    
    />

    <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
        class="p-3 mb-3 justify-between flex  rounded bg-white shadow-md"
        v-for="ingredient in computedIngredients"
        :key="ingredient.idIngredient"
      >
        <h3 class="text-2xl  font-bold mb-2">{{ ingredient.strIngredient }}</h3>
     
    </router-link>
  </div>
</template>

<script setup>

import { useRecipeStore } from '@/stores/RecipeStore'

import { computed, onMounted,ref } from 'vue'

const recipeStore = useRecipeStore()
const keyword = ref('')
const ingredients = computed(()=>recipeStore.ingredients)
const computedIngredients = computed(()=>{
  console.log(ingredients.value)
    return ingredients.value.filter(ing=>ing.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())) || []
 
}


)
onMounted(() => {
  recipeStore.fetchIngredients()
})
</script>
