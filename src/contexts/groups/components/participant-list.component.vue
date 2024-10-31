<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  contacts: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])

const toggleParticipant = (contact) => {
  const updatedParticipants = { ...props.modelValue }

  if (updatedParticipants[contact.id]) {
    delete updatedParticipants[contact.id]
  } else {
    updatedParticipants[contact.id] = { ...contact, amount: 0, pendingPayment: 0 }
  }

  emit('update:modelValue', updatedParticipants)
}
</script>

<template>
  <div class="participant-list">
    <div
      v-for="contact in contacts"
      :key="contact.id"
      @click="toggleParticipant(contact)"
      class="participant-item"
    >
      <span>{{ contact.name }}</span>
      <span v-if="modelValue[contact.id]" class="participant-item-check">✔️</span>
    </div>
  </div>
</template>

<style scoped>
.participant-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 5px 0 12px 0;
}
.participant-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  background-color: #555d;
}
.participant-item:hover {
  background-color: #666d;
}
.participant-item .participant-item-check {
  margin-top: -6.5px;
}
</style>
