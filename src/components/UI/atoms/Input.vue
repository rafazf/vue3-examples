<script setup lang="ts">

  defineProps<{
    type:string
    isRequired?: boolean
  }>()
  const model = defineModel({required:true})
  defineEmits(['blurEmit'])
</script>

<template>
  <input
    v-model="model"
    :type="type"
    @blur="$emit('blurEmit')"
    class="pl-2 underline-none focus:outline-none border-b text-slate-500"
    :required="isRequired"
  />
</template>

<style scoped>

</style>