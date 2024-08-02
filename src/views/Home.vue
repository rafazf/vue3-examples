<script setup lang="ts">
import sourceData from '../data.json'

</script>

<template>
  <div class="destination flex gap-2 mt-5 w-1/2 m-auto">
    <router-link
      v-for="destination in sourceData.destinations"
      :key="destination.name"
      :to="destination.slug"
    >
      <h2>{{destination.name}}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
    </router-link>
  </div>
</template>

<style scoped>

</style>