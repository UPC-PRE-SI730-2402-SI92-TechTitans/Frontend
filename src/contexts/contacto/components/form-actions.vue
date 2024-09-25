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
.p-field{
  display: flex;
  gap: 15px;
}

.p-button-success{
  background-color: #E8C8C8;
  color: #041C32;
  border-color: #E8C8C8;
  border-radius: 30px;
  font-size: 18px;
}

.p-button-secondary{
  background-color: #E8C8C8;
  color: #041C32;
  border-color: #E8C8C8;
  border-radius: 30px;
  font-size: 18px;
}
</style>