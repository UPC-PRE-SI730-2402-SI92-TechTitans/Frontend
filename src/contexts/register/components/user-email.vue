<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="form">
    <label for="email" class="email">Correo electrónico</label>
    <pv-input-text id="email" :value="modelValue" @input="updateValue"></pv-input-text>
  </div>
</template>

<style scoped>
.form {
  margin-bottom: 10px;
}

.email{
  margin-right: 10px;
}

input, select {
  min-width: 15%;
  padding: 8px;
}
</style>
