<script setup lang="ts">
import sourceData from '../data.json'
import { useRoute } from 'vue-router'

const route = useRoute()

const destinationId = () => {
  return parseInt(route.params.id + '')
}
const destinationBySlug = () => {
  return route.params.slug
}
const destination = () => {
  return sourceData.destinations.find(destination => destination.id === destinationId())
}

</script>

<template>
  <section v-if="destination" class="destination">
    <h1 class="font-bold text-xl">{{ destination()!.name }}</h1>
    <div class="destination-detail">
      <img :src="`/images/${destination()!.image}`" :alt="destination!.name" />
      <p class="text-[12px]">{{ destination()!.description }}</p>
    </div>
  </section>
</template>

<style scoped>

.destination {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 40px;
  width: 60%;
  margin: auto;
}

.destination-detail {
  display: flex;
  gap: 2rem;
}

.destination-detail img {
  border: #2c3e50 1px solid;
  height: 200px;
  box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.1);
}
</style>