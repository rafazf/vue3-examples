<script setup lang="ts">
import { ref } from 'vue'
import sourceData from '@/data.json'

const showSettings = ref(false)
const onShowSettings = () => {
  showSettings.value = !showSettings.value;
}
</script>

<template>
  <div class="border-b w-full h-16 flex justify-center items-center relative">
    <ul class="w-1/2 m-auto flex justify-center gap-16">
      <router-link to="/">Home</router-link>
      <router-link
        v-for="destination in sourceData.destinations"
        :key="destination.name"
        :to="{name:'destination.show',params:{id:destination.id,slug:destination.slug}}"
      >
        <h2>{{destination.name}}</h2>
      </router-link>
    </ul>
    <div @click="onShowSettings" class="w-12 h-12 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-2 cursor-pointer overflow-hidden ">
      <img src="../assets/img/avatar0.png" alt="">
    </div>
    <div
      v-if="showSettings"
      class="rounded-full mx-2 w-32 h-16 absolute right-10 top-10 z-40 shadow backdrop-blur-sm">
      <div class="flex flex-col p-2 items-center text-slate-500">
        <ul>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Log out</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .linkActive{
    color: #ec4899;
    border-bottom: 1px solid #ec4899;
  }
</style>