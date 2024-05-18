<template>
  <div class="p-8">
    <h1 class="text-gray-600 font-medium text-2xl md:text-4xl mb-4">Ingredient</h1>

    <div
      class="mb-5 hover:border-green-300 bg-white flex w-full items-center px-5 border-2 border-gray-200 rounded-lg"
    >
      <input
        class="w-full p-3 outline-none"
        v-model="keyword"
        type="text"
        name=""
        id=""
        placeholder="Search fror Ingredients"
        @change="searchMeals"
      />
      <svg
        class="w-5 h-5 text-green-600 font-bold"
        data-slot="icon"
        aria-hidden="true"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
    <Status :meals="ingredients" />
    <div class="flex justify-between gap-5 flex-wrap">
      <router-link
        :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
        class="p-1 hover:bg-green-400 hover:text-gray-50 rounded-lg justify-between flex bg-white shadow-md"
        v-for="ingredient in computedIngredients.data()"
        :key="ingredient.idIngredient"
      >
        <h3 class="text-md text-center">{{ ingredient.strIngredient }}</h3>
      </router-link>
    </div>
  </div>
  <div class="flex justify-center gap-5">
    <span @click="computedIngredients.back()"
      ><svg
        class="w-9 h-6"
        data-slot="icon"
        aria-hidden="true"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path></svg
    ></span>
<span class="p-1 text-sm rounded-full bg-green-300 text-white">{{ page }}</span>
    <span  @click="computedIngredients.next()"
      ><svg
      class="w-9 h-6"
        data-slot="icon"
        aria-hidden="true"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path></svg></span>
  </div>
</template>

<script setup>
import { useRecipeStore } from '@/stores/RecipeStore'

import { computed, onMounted, ref } from 'vue'
import Status from '@/components/Status.vue'

const recipeStore = useRecipeStore()
const keyword = ref('')
const pageSize = ref(20)
const page = ref(0)
const ingredients = computed(() => recipeStore.ingredients)

const computedIngredients = computed(() => {
  return {
    next: () => {
      page.value++
    },

    back: () => {
      if(page.value>=0)
      page.value--
      
    },

    data: () => {
    
      return (
        ingredients.value
          .slice(page.value * pageSize.value, page.value * pageSize.value + pageSize.value)
          .filter((ing) => ing.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())) ||
        []
      )
    }
  }
})

onMounted(() => {
  recipeStore.fetchIngredients()
})
</script>
