<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  const value = event.target.value
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="form">
    <label for="email" class="email">Email</label>
    <pv-input-text id="email" :value="modelValue" @input="updateValue"></pv-input-text>
  </div>
</template>

<style scoped>
.email {
  margin-left: 27px;
  margin-right: 10px;
}

input,
select {
  width: 250px;
  padding: 8px;
}
</style>
