<template>
  <div class="grid grid-cols-2 grid-rows-2   bg-gray-100 ">
   <div  class="bg-black p-3 h-16 col-span-2">f</div>
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
  <Footer/>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import NavBar from './NavBar.vue'
</script>
