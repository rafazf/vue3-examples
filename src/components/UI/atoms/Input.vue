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
    class="rounded-xl p-1 pl-2 underline-none border"
    :required="isRequired"
  />
</template>

<style scoped>

</style>