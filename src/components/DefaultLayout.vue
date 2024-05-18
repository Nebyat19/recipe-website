<template>
  <div class="relative flex flex-col bg-gray-100 min-h-screen">
    <div class=" "><TopNavBar /></div>
    <div class="flex">
      <NavBar class="inline-flex " />
      <main class="w-full md:w-9/12 mb-48">
        <router-view />
      </main>
      
    </div>
    <Footer />
  </div>


</template>

<script setup>
import Footer from '@/components/Footer.vue'
import NavBar from './NavBar.vue'
import TopNavBar from '@/components/TopNavBar.vue'
</script>
