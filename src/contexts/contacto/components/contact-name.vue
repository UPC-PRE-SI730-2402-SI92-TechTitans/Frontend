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
    <label for="name" class="form-label">{{ $t('contacts.contactForm.name')}}</label>
    <pv-input-text id="name" :value="modelValue" @input="updateValue" class="form-input"></pv-input-text>
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
