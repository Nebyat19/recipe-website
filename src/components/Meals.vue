<template>
 <Status :meals="meals"/>
 <div class="grid grid-cols-1 md:grid-cols-3 gap-5 py-8">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
 
    </div>
    
</template>

<script setup>
import MealItem from './MealItem.vue';
import Status from './Status.vue'
const props = defineProps({
    meals: Array
})

</script>