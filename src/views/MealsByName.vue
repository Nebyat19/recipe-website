<template>
  <div class="p-8">
    <input
      v-model="keyword"
      type="text"
      name=""
      id=""
      placeholder="Search fror Meals"
      class="w-full rounded border-2 border-gray-200"
      @change="searchMeals"
    />
    <span v-show="recipeStore.loading">loading ...</span>
    <span v-show="recipeStore.error">{{ recipeStore.error }}</span>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div
        v-for="meal in meals"
        :key="meal.idMeal"
        class="bg-white rounded-t-xl overflow-hidden border shadow"
      >
        <img :src="meal.strMealThumb" alt="strMeal" class="h-48 w-full object-cover" />
        <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nostrum, reiciendis itaque, nam asperiores molestiae cumque perferendis odio ullam nisi vero similique maiores quo sunt, iusto in quam consectetur temporibus.</p>
          <div class="flex items-center justify-between">
            <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-500 transition-colors">YouTube</a>
            <router-link to="/" class="px-3 py-2 rounded-md border border-orange-600 text-gray hover:bg-orange-600 hover:text-white transition-colors">View</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRecipeStore } from '@/stores/RecipeStore.js'
import { computed, ref } from 'vue'
const recipeStore = useRecipeStore()

const keyword = ref('')
const meals = computed(() => recipeStore.getSearchedMeals.meals)

const searchMeals = () => {
  recipeStore.searchMeals(keyword.value)
}
</script>
