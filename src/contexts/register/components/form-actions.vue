<script setup>
const emit = defineEmits(['register', 'cancel'])

const register = () => {
  emit('register')
}

const cancel = () => {
  emit('cancel')
}
</script>

<template>
  <div class="buttons">
    <pv-button @click="register" class="p-button-success">Register</pv-button>
    <RouterLink to="/login"><pv-button @click="cancel" class="p-button-secondary">Cancel</pv-button></RouterLink>
  </div>
</template>

<style scoped>
.p-button-success{
  background-color: #E8C8C8;
  color: #041C32;
  border-color: #E8C8C8;
  border-radius: 30px;
  font-size: 18px;
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 5px;
}

.p-button-secondary{
  background-color: #E8C8C8;
  color: #041C32;
  border-color: #E8C8C8;
  border-radius: 30px;
  font-size: 18px;
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
