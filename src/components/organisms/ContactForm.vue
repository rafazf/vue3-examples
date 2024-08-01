<template>
  <div class="bg-gray-200 text-black p-5 rounded-2xl flex flex-col justify-start gap-2">
    <span class="text-3xl text-center font-semibold">Contact Us</span>
    <form @submit="checkForm($event)">
      <FormField
        v-model="formData.name"
        label-value="Name"
        input-type="text"
        :validator="['required']"
        add-class="flex-col"
      />
      <Form-field
        v-model="formData.surname"
        label-value="Surname"
        input-type="text"
        add-class="flex-col"/>
      <FormField
        v-model="formData.phone"
        label-value="phone"
        input-type="number"
        add-class="flex-col"/>
      <FormField
        v-model="formData.email"
        label-value="email"
        input-type="email"
        :validator="['email','required']"
        add-class="flex-col"/>
      <FormField
        v-model="formData.perms"
        label-value="Terms and Conditions"
        input-type="checkbox"
        add-class="flex-row-reverse justify-center items-center">
      </FormField>
      <div class="text-center">
        <Button title="Send"></Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormField from '@/components/UI/molecules/FormField.vue'
import type { ContactModel } from '@/models/Contact.model'
import Button from '@/components/UI/atoms/Button.vue'
const formData = ref<ContactModel>({
  name:'',
  surname:'',
  phone:'',
  email:'',
  perms:false
})
const checkForm = (e:Event) => {
    alert('Se enviaron los datos.')
    e.preventDefault()
}

</script>

<style scoped></style>
