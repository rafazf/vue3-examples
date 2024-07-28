<template>
  <div class="bg-yellow-300 text-black p-2 rounded flex flex-col">
    <h1>contact</h1>
    <label for="name">Nombre</label>
    <input v-model="text" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>

<style scoped></style>
