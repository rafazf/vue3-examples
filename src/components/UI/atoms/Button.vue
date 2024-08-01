<script setup lang="ts">
  defineProps<{
    title:string
  }>()
</script>

<template>
  <button class="bg-purple-700 text-white rounded-xl p-2 px-3">{{title}}</button>
</template>

<style scoped>

</style>