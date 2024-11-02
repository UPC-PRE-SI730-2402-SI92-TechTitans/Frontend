<script setup>
const emit = defineEmits(['save', 'cancel'])

const save = () => {
  emit('save')
}

const cancel = () => {
  emit('cancel')
}
</script>

<template>
  <div class="p-field">
    <pv-button @click="save" class="p-button-success">{{
      $t('contacts.contactForm.saveButton')
    }}</pv-button>
    <pv-button @click="cancel" class="p-button-secondary">{{
      $t('contacts.contactForm.cancelButton')
    }}</pv-button>
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
