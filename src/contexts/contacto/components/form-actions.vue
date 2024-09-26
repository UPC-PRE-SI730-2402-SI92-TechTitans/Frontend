<script setup>
const emit = defineEmits(['guardar', 'cancelar'])

const guardar = () => {
  emit('guardar')
}

const cancelar = () => {
  emit('cancelar')
}
</script>

<template>
  <div class="p-field">
    <pv-button label="Guardar" @click="guardar" class="p-button-success"></pv-button>
    <pv-button label="Cancelar" @click="cancelar" class="p-button-secondary"></pv-button>
  </div>
</template>

<style scoped>
.p-field {
  display: flex;
  gap: 15px;
}

.p-button-success {
  background-color: #e8c8c8;
  color: #041c32;
  border-color: #e8c8c8;
  border-radius: 30px;
  font-size: 18px;
}

.p-button-secondary {
  background-color: #e8c8c8;
  color: #041c32;
  border-color: #e8c8c8;
  border-radius: 30px;
  font-size: 18px;
}
</style>
