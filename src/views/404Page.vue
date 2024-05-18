<template>
    <div class=" flex  flex-col items-center justify-center text-gray-500">

        <h1 class="flex flex-col text-6xl font-bold text-gray-600 mt-10">404
            <span class="text-xs text-center ">Page Not Found</span>
        </h1>

        <img class="w-32 h-auto" :src="BLACK_LOGO" alt="">
    </div>
</template>

<script setup>
import { BLACK_LOGO } from '@/lib/constants.js'

</script>