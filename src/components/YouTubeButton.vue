<template>
  <a
    :href="youtubeLink"
    target="_blank"
    class="px-3 py-2 text-sm rounded-md bg-green-600 text-white hover:bg-red-500 transition-colors"
    ><slot></slot
  ></a>
</template>
<script setup>
const props = defineProps({
  youtubeLink: String
})
</script>
