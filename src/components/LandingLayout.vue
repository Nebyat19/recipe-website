<template>
  <TopNavBar />

  <section class="bg-gray-100 relative  py-14 flex flex-col  justify-between ">
   <div class="flex px-8 md:px-16 justify-between items-center">
    <div class="flex flex-col gap-14 ">
      <h1 class="big-text text-3xl md:text-[6rem] text-slate-800 whitespace-nowrap">Your Daily Dose of</h1>
    <div class="flex flex-col md:flex-row items-center gap-10">  <h2 class="delicious text-3xl md:text-[6rem] text-green-500">Delicious</h2> 
        <div class="flex gap-10">
           <div class=" flex flex-col md:flex-row gap-3">
            <span class="flex gap-3 items-center text-sm">
                <img class="h-10 w-10 rounded-full" :src="PIZZA_3" alt="">
                <h6>Margarita Pizza</h6>
            </span>
            <span class="flex gap-3 items-center text-sm">
                <img class="h-10 w-10 rounded-full" :src="PIZZA_2" alt="">
                <h6>Grilled ceasar salad </h6>
            </span>
            <span class="flex gap-3 items-center text-sm">
                <img class="h-10 w-10 rounded-full" :src="BURGER_1" alt="">
                <h6>Burger Blus Combo</h6>
            </span>
           </div>


        </div></div>
    </div>
   
    <div class="w-2/12">
        <p class="text-sm hidden md:inline-flex text-gray-800">
            Discover hand crafted meals made with love. browse our meals and find your next favorite dish
        </p>
    </div>

   </div>
 <div class="px-8 md:px-16 my-10 flex  flex-col md:flex-row items-center justify-around">
    <div class="flex justify-start gap-3">
<div class="w-48 h-80 relative">
    <img class="absolute h-full rounded-md w-full inset-0 object-cover" :src="CHEF" alt="">
    <span class="absolute top-2 text-sm pr-10 rounded-full left-5 pl-5 py-1 bg-green-100 text-green-600">Best Chef ---></span>
</div>
<div class="w-48 h-80 relative">
    <img class="absolute h-full rounded-md w-full inset-0 object-cover" :src="PIZZA_1" alt="">
    <span class="absolute top-2 text-sm pr-10 rounded-full left-5 pl-5 py-1 bg-green-100 text-green-600">Best Chef ---></span>
</div>
    </div>
    <div><img class="mb-10 h-96" :src="HERO_IMAGE" alt=""></div>
 </div>
   
  
    <Footer class="absolute bottom-0" />
  </section>
 

</template> 

<script setup>
import TopNavBar from '@/components/TopNavBar.vue'
import Footer from '@/components/Footer.vue'
import {HERO_IMAGE,CHEF,PIZZA_1,PIZZA_2,PIZZA_3,BURGER_1} from '@/lib/constants.js'
</script>
