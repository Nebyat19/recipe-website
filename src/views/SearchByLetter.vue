<template>
  <div class="flex flex-col p-8 justify-center">
    <div class="flex justify-center mt-2 gap-3">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}
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
