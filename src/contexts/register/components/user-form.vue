<script setup>
import {defineEmits, ref, reactive, onMounted } from 'vue'
import UserName from '@/contexts/register/components/user-name.vue'
import UserLastname from '@/contexts/register/components/user-lastname.vue'
import UserEmail from '@/contexts/register/components/user-email.vue'
import UserPassword from '@/contexts/register/components/user-password.vue'
import FormActions from '@/contexts/register/components/form-actions.vue'
import { useRoute } from 'vue-router'
import { User } from '@/contexts/register/models/user-entity.js'
import { UserApiService } from '@/contexts/register/services/user-api.js'


const routes = useRoute()
const emit = defineEmits(['cancel'])
const form = reactive(new User())
const userApiService = new UserApiService()
const id = ref(routes.params.id || '')

const onSubmit = () => {
  if (id.value !== '') {
    userApiService
      .update(id.value, form)
      .then(() => {
        emit('register')
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    return
  }

  const { id: omitId, ...newUserData } = form
    userApiService
    .save(newUserData)
    .then(() => {
      emit('register')
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

onMounted(() => {
  if (id.value) {
    userApiService.get(id.value).then((response) => {
      const UserData = response.data

      form.name = UserData.name
      form.lastname = UserData.lastname
      form.email = UserData.email
      form.password = UserData.password
      form.id = UserData.id
    })
  }
})

const onCancel = () => {
  form.name = ''
  form.lastname = ''
  form.email = ''
  form.password = ''
  form.id = 0

  emit('cancel')
}
</script>

<template>
  <div class="register-form">
    <form @submit.prevent="onSubmit" class="form-container">
      <h1>Registro</h1>
      <div class="form-group">
        <user-name v-model="form.name"></user-name>
      </div>
      <div class="form-group">
        <user-lastname v-model="form.lastname"></user-lastname>
      </div>
      <div class="form-group">
        <user-email v-model="form.email"></user-email>
      </div>
      <div class="form-group">
        <user-password v-model="form.password"></user-password>
      </div>
      <div class="buttons">
        <form-actions @register="onSubmit" @cancel="onCancel"></form-actions>
      </div>
    </form>
  </div>
</template>

<style scoped>
.register-form{
  text-align: center;
}

h1{
  color: black;
  font-size: 40px;
}
</style>
