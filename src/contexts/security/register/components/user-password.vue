<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  const newValue = event.target.value
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div class="form">
    <label for="password" class="password">Password</label>
    <pv-password
      id="password"
      :modelValue="modelValue"
      @input="updateValue"
      :feedback="false"
      toggleMask
      class="input-password"
    />
  </div>
</template>

<style scoped>
.password {
  margin-left: 10px;
  margin-right: 10px;
}

.input-password {
  width: 250px;
  margin-left: -4px;
}
</style>
