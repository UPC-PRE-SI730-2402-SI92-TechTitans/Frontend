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
  <div class="p-field">
    <label for="email" class="form-label">Correo electrónico</label>
    <pv-input-text id="email" :value="modelValue" @input="updateValue" class="form-input"></pv-input-text>
  </div>
</template>

<style scoped>
.form-label {
  font-weight: bold;
  margin-right: 10px;
}

.form-input {
  width: 55%;
}
</style>