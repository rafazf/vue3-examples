<script setup lang="ts">
  defineProps<{
    title:string
  }>()
</script>

<template>
  <button
    class="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white font-bold text-[12px] rounded-2xl p-2 px-10">{{title}}</button>
</template>

<style scoped>

</style>