<script setup lang="ts">
import Input from '@/components/UI/atoms/Input.vue'
import Label from '@/components/UI/atoms/Label.vue'
import { ref } from 'vue'
import { ValidationError } from '@/config/validationError'

const props = defineProps<{
  labelValue: string
  inputType: string
  addClass?: string
  validator?:string[]
}>()

const model = defineModel({ required: true })
const error = ref<string | null>(null);

const validator = () => {
  if (props.validator){

    if(props.validator.some(value => value === 'required')){
      error.value = ValidationError.isRequired(model.value as string)
    }
    if (props.validator.some(value => value === 'email')){
      error.value = error.value + ValidationError.isEmail(model.value as string)
    }
    console.log(error.value)
  }
}
</script>

<template>
  <div :class="['flex gap-2',addClass]">
    <Label
      :label="labelValue">
    </Label>
    <Input
      :type="inputType"
      v-model="model"
      @input="validator()"
      @blurEmit="validator()"
    >
    </Input>
    <div class="text-[12px] text-red-500">
      <span>{{error}}</span>
    </div>
  </div>
</template>

<style scoped>

</style>