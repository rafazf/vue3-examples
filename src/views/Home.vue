<script setup lang="ts">
import sourceData from '../data.json'

</script>

<template>
  <div class="mt-10 w-1/2 m-auto flex flex-col gap-3">
    <h1 class="text-xl font-bold">All destination</h1>
    <div class="destination flex gap-2 ">
      <router-link
        v-for="destination in sourceData.destinations"
        :key="destination.name"
        :to="{name:'destination.show',params:{id:destination.id}}"
      >
        <h2 class="font-bold">{{destination.name}}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>

</template>

<style scoped>

</style>