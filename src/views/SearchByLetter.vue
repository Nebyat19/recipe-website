<template>
  <div class="p-5 md:p-0  max-w-[900px]">
    <div class=" hide-scroll-bar gap-2 flex mb-5 justify-start overflow-x-scroll mt-8 ">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
       <span class="px-3 py-2 ml-2  hover:bg-green-400 hover:text-white  bg-white"> {{ letter }}</span>
      </router-link>
      <div></div>
    </div>
    <Meals :meals="meals"/>
  </div>

</template>

<script setup>
import { useRecipeStore } from '@/stores/RecipeStore'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Meals from '@/components/Meals.vue'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const recipeStore = useRecipeStore()
const meals = computed(() => recipeStore.mealsByLetter)

const loading = ref(false)
const error = ref(null)

const route = useRoute()
watch(route,() => {
  try {
    loading.value = true
    recipeStore.searchMealsByLetter(route.params.letter)
  } catch (e) {
    error.value = error
  } finally {
    loading.value = false
  }
})
</script>
