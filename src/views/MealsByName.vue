<template>
  <div class="border p-5 md:p-16 pb-0">
    <div class= " hover:border-green-300 bg-white flex w-full  items-center px-5 border-2 border-gray-200 rounded-lg">
      <input
      class="w-full p-3 outline-none"
        v-model="keyword"
        type="text"
        name=""
        id=""
        placeholder="Search fror Meals"
        @change="searchMeals"
      />
      <svg
        class="w-5 h-5 text-green-600 font-bold "
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

    <Meals :meals="meals" />
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
  if (keyword.value) recipeStore.searchMealsByName(keyword.value)
  else recipeStore.setMealsByName([])
}
onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) searchMeals()
})
</script>
