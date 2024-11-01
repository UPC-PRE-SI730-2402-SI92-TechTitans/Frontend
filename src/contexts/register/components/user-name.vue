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
    <label for="name" class="name">Name</label>
    <pv-input-text id="name" :value="modelValue" @input="updateValue"></pv-input-text>
  </div>
</template>

<style scoped>
.name {
  margin-left: 26px;
  margin-right: 10px;
}

input,
select {
  width: 250px;
  padding: 8px;
}
</style>
