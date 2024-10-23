<script setup>
const emit = defineEmits(['save', 'cancel'])

const save = () => {
  emit('save')
}

const cancelar = () => {
  emit('cancel')
}

</script>

<template>
  <div class="p-field">
    <pv-button label="Guardar" @click="save" class="p-button-success"></pv-button>
    <pv-button label="Cancelar" @click="cancel" class="p-button-secondary"></pv-button>
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
