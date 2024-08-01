<template>
  <div class="flex w-5/6">
    <div class=" text-black p-5  flex flex-col justify-start gap-2 w-3/4">
      <span class="text-4xl text-start mb-3 font-semibold">Contact</span>
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
          label-value="Phone"
          input-type="number"
          add-class="flex-col"/>
        <FormField
          v-model="formData.email"
          label-value="Email"
          input-type="email"
          :validator="['email','required']"
          add-class="flex-col"/>
        <FormField
          v-model="formData.perms"
          label-value="Terms and Conditions"
          input-type="checkbox"
          add-class="mb-7 flex-row-reverse items-center justify-end">
        </FormField>
        <div class="mt-3">
          <Button title="SEND"></Button>
        </div>
      </form>
    </div>
    <div class="w-1/4 bg-gray-200 relative ">
      <div class="absolute z-40 p-2 w-full flex flex-col px-10 pt-20 gap-1 ">
        <span class="text-indigo-700 font-bold">rafael@dev.com</span>
        <span class="text-slate-700 font-bold">998 - 542 - 000</span>
        <span class="text-slate-700 font-bold">@rafael</span>
      </div>
      <img class="opacity-90 " src="../../assets/img/backgroundContact.jpg" alt="">
    </div>
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
