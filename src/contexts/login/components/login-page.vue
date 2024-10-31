<script setup>
import { UserApiService } from '@/contexts/register/services/user-api.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const userApiService = new UserApiService()
const router = useRouter()

const login = async () => {
  const result = await userApiService.login(email.value, password.value)
  if (result.success) {
    localStorage.setItem('authToken', result.token)
    router.push('/')
  } else {
    alert(result.message)
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Login</h2>
      <form class="form-container" @submit.prevent="login">
        <div class="form-group">
          <label for="email" class="email">Email</label>
          <pv-input-text type="text" id="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password" class="password">Password</label>
          <pv-input-text type="password" id="password" v-model="password" />
        </div>
        <pv-button type="submit" class="button">Login</pv-button>
      </form>
    </div>
    <div class="register">
      <RouterLink to="/register">Create an account</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  width: 100vw;
  margin-top: 30vh;
}
.login-form{
  text-align: center;
}

.form-group{
  margin-bottom: 10px;
}

.button{
  background-color: #E8C8C8;
  color: #041C32;
  border-color: #E8C8C8;
  border-radius: 30px;
  font-size: 18px;
  margin-top: 30px;
}

h2{
  color: black;
  font-size: 40px;
  margin-bottom: 20px;
}

.password{
  margin-right: 10px;
}

.email{
  margin-right: 10px;
  margin-left: 22px;
}

input, select {
  min-width: 15%;
  padding: 8px;
}

.register{
  text-align: center;
  margin-top: 20px;
}
</style>
