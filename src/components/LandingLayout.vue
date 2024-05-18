<template>
  <TopNavBar />

  <section class="bg-gray-100 relative py-14 flex flex-col justify-between">
    <div class="flex px-8 md:px-16 justify-between items-center">
      <div class="flex flex-col md:gap-14">
        <h1 class="big-text text-4xl md:text-[6rem] text-slate-800 whitespace-nowrap">
          Your Daily Dose of
        </h1>
        <div class="flex flex-col md:flex-row items-center gap-10">
          <h2 class="delicious text-4xl md:text-[6rem] text-green-500">Delicious</h2>
          <div class="flex gap-10">
            <div class="flex flex-col md:flex-row gap-3">
              <span class="flex gap-3 items-center text-sm">
                <img class="h-10 w-10 rounded-full" :src="PIZZA_3" alt="" />
                <h6>Margarita Pizza</h6>
              </span>
              <span class="flex gap-3 items-center text-sm">
                <img class="h-10 w-10 rounded-full" :src="PIZZA_2" alt="" />
                <h6>Grilled ceasar salad</h6>
              </span>
              <span class="flex gap-3 items-center text-sm">
                <img class="h-10 w-10 rounded-full" :src="BURGER_1" alt="" />
                <h6>Burger Blus Combo</h6>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="w-2/12">
        <p class="text-sm p-3 border border-green-100 hidden md:inline-flex text-gray-800">
          Discover hand crafted meals made with love. browse our meals and find your next favorite
          dish
        </p>
      </div>
    </div>
    <div class="px-8 md:px-16 my-2 flex gap-10 flex-col md:flex-row items-center justify-around">
      <div class="flex justify-start gap-1">
        <div class="w-48 h-64 relative">
          <img class="absolute h-full rounded-md w-full inset-0 object-cover" :src="CHEF" alt="" />
          <span
            class="absolute top-2 text-sm pr-10 rounded-full left-5 pl-5 py-1 flex gap-1 bg-green-100 text-green-600"
            >Best Chef
            <svg
              class="w-26 h-5"
              data-slot="icon"
              aria-hidden="true"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
          ></span>
        </div>
        <div class="w-48 h-64 relative">
          <img
            class="absolute h-full rounded-md w-full inset-0 object-cover"
            :src="PIZZA_1"
            alt=""
          />
          <span
            class="absolute top-2 text-sm pr-10 rounded-full left-5 pl-5 py-1 flex gap-1 bg-green-100 text-green-600"
            >See meals
            <svg
              class="w-26 h-5"
              data-slot="icon"
              aria-hidden="true"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
          ></span>
        </div>
      </div>
      <div class="bg-green-200 h-80 w-80 rounded-full p-5 relative">
        <img class="mb-10 h-full w-full absolute" :src="HERO_IMAGE" alt="" />
      </div>
    </div>
    <div class="flex justify-center items-center my-10">
      <button class="px-10 rounded-md hover:bg-green-600 bg-green-400 text-white py-2">
      <router-link to="/home">  Try it Now</router-link>
      </button>
    </div>

    <Footer class="absolute bottom-0" />
  </section>
</template>

<script setup>
import TopNavBar from '@/components/TopNavBar.vue'
import Footer from '@/components/Footer.vue'
import { HERO_IMAGE, CHEF, PIZZA_1, PIZZA_2, PIZZA_3, BURGER_1 } from '@/lib/constants.js'
</script>
