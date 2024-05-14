<template>
  <div class="flex flex-col p-8 justify-center">
   
    <div class="flex justify-center mt-2 gap-3">
      <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter in letters" :key="letter">
      {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>

import {axiosClient} from '../axiosMealClient'
import { onMounted } from 'vue';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

onMounted(async()=>{
  try {
    const response = await axiosClient.get('/list.php?i=list')
 console.log(response.data)
  } catch (error) {
    console.log("Error:")
  }

})

</script>
