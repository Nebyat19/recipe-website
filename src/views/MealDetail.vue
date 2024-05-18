<template>
  <Status :meals="[computedMeal]" />
  <div  class="max-w-[800px] mx-auto p-8">
    <div>
      <h1 class="text-2xl text-gray-600 font-bold mb-5">{{ computedMeal.strMeal }}</h1>
      <img
        :src="computedMeal.strMealThumb"
        :alt="computedMeal.strMeal"
        class="w-full h-80 object-cover"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 text-lg py-2">
        <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
        <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
        <div>
          <strong class="font-bold">Tags:</strong>
          <span
            class="inline-flex whitespace-pre-line overflow-clip"
            v-for="tag in computedTags(computedMeal.strTags)"
            :key="tag"
            >#{{ tag }},
          </span>
        </div>
      </div>
      <div class="my-3">{{ meal.strInstructions }}</div>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            <template v-for="(elem, ind) of new Array(20)" :key="ind">
              <li v-show="computedMeal[`strIngredient${ind + 1}`] !== ''">
                {{ ind + 1 }}. {{ computedMeal[`strIngredient${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-3">Measures</h2>
          <ul>
            <template v-for="(elem, ind) of new Array(20)" :key="ind">
              <li v-show="computedMeal[`strIngredient${ind + 1}`] !== ''">
                {{ ind + 1 }}. {{ computedMeal[`strMeasure${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-5">
      <YouTubeButton :href="meal.strYoutube">Goto Youtube</YouTubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 hover:text-indigo-400 text-indigo-700 text-sm"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>

import { computed, onMounted} from 'vue'
import YouTubeButton from '@/components/YouTubeButton.vue'
import { useRoute, useRouter } from 'vue-router'
import Status from '@/components/Status.vue'
import { useRecipeStore } from '@/stores/RecipeStore'

const route = useRoute()
const router = useRouter();
const meal = computed(()=>recipeStore.mealDetail)

const computedMeal = computed(() => meal.value || {})
const computedTags = (tags) => {
  if (!tags) return []
  return tags.split(',').map((tag) => tag.trim())
}
const recipeStore = useRecipeStore()

onMounted(async() => {
 await recipeStore.fetchMealDetail(route.params.id)
  if(!route.params.id || route.params.id.length===0)  router.push('/404')
  console.log("aaa",computedMeal.value.length)
 
})
</script>
