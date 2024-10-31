<script setup>
import { defineEmits, ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UserName from '@/contexts/register/components/user-name.vue'
import UserLastname from '@/contexts/register/components/user-lastname.vue'
import UserEmail from '@/contexts/register/components/user-email.vue'
import UserPassword from '@/contexts/register/components/user-password.vue'
import FormActions from '@/contexts/register/components/form-actions.vue'
import { User } from '@/contexts/register/models/user-entity.js'
import { UserApiService } from '@/contexts/register/services/user-api.js'

const routes = useRoute()
const router = useRouter()
const emit = defineEmits(['cancel'])
const form = reactive(new User())
const userApiService = new UserApiService()
const id = ref(routes.params.id || '')

const errors = reactive({
  name: '',
  lastname: '',
  email: '',
  password: ''
})

const validateForm = () => {
  let isValid = true

  if (!form.name) {
    errors.name = 'Name is required.'
    isValid = false
  } else {
    errors.name = ''
  }

  if (!form.lastname) {
    errors.lastname = 'Last name is required.'
    isValid = false
  } else {
    errors.lastname = ''
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email || !emailPattern.test(form.email)) {
    errors.email = 'Please enter a valid email.'
    isValid = false
  } else {
    errors.email = ''
  }

  if (!form.password || form.password.length < 10 || form.password.length > 30) {
    errors.password = 'Password must be between 10 and 30 characters.'
    isValid = false
  } else {
    errors.password = ''
  }

  return isValid
}

const onSubmit = () => {
  if (!validateForm()) return

  if (id.value !== '') {
    userApiService
      .update(id.value, form)
      .then(() => {
        router.push('/')
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
      router.push('/')
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
      <h2>Register</h2>

      <div class="form-group">
        <user-name v-model="form.name"></user-name>
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>

      <div class="form-group">
        <user-lastname v-model="form.lastname"></user-lastname>
        <p v-if="errors.lastname" class="error">{{ errors.lastname }}</p>
      </div>

      <div class="form-group">
        <user-email v-model="form.email"></user-email>
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div class="form-group">
        <user-password v-model="form.password"></user-password>
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <div class="buttons">
        <form-actions @register="onSubmit" @cancel="onCancel"></form-actions>
      </div>
    </form>
    <div class="login">
      <RouterLink to="/login">Already have an account?</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.register-form {
  text-align: center;
  margin: auto;
}

h2 {
  color: black;
  font-size: 40px;
  margin-bottom: 30px
}

.error {
  color: red;
  font-size: 14px;
  text-align: center;
  position: absolute;
  left: 50%;
}

.form-group {
  margin-bottom: 30px;
}

.login{
  text-align: center;
  margin-top: 20px;
}
</style>
