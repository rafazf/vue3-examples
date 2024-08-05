<script setup lang="ts">
import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <TheNavigation></TheNavigation>
  <RouterView :key="$route.path"/>
</template>

<style scoped></style>
