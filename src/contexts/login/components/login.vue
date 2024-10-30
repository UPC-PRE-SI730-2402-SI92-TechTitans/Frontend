<script setup>
import { ref} from 'vue'

const email = ref('')
const password = ref('')
</script>

<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Inicio de sesión</h1>
      <form class="form-container">
        <div class="form-group">
          <label for="email" class="email">Correo electrónico</label>
          <pv-input-text type="text" id="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password" class="password">Contraseña</label>
          <pv-input-text type="password" id="password" v-model="password" />
        </div>
        <pv-button class="button">Iniciar sesión</pv-button>
      </form>
    </div>
    <div class="register">
      <RouterLink to="/register">Crear una cuenta</RouterLink>
    </div>
  </div>
</template>

<style scoped>
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

h1{
  color: black;
  font-size: 40px;
}

.password{
  margin-right: 10px;
  margin-left: 50px;
}

.email{
  margin-right: 10px;
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
