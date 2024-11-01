<script setup>
import { defineProps, defineEmits } from 'vue'
import 'primeicons/primeicons.css'

const props = defineProps({
  contacts: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['edit', 'delete', 'create'])

const deleteContact = (id) => {
  emit('delete', id)
}

const showCreateForm = () => {
  emit('create')
}
</script>

<template>
  <h2>{{ $t('contacts.contactList.title') }}</h2>
  <div class="contacts-container">
    <li v-for="contact in contacts" :key="contact.id || contact.name" class="cards">
      <pv-card class="contact-card">
        <template #header>
          <pv-avatar icon="pi pi-user" size="xlarge" shape="circle" class="icon"> </pv-avatar>
        </template>
        <template #content>
          {{ $t('contacts.contactList.name') }}: {{ contact.name || '' }}
          <br />
          {{ $t('contacts.contactList.email') }}: {{ contact.email || '' }}
        </template>
        <template #footer>
          <div class="buttons">
            <router-link
              v-if="contact.id"
              :to="{ name: 'updateContact', params: { id: contact.id } }"
              >{{ $t('contacts.contactList.editButton') }}</router-link
            >

            <pv-button
              v-if="contact.id"
              @click="deleteContact(contact.id)"
              severity="danger"
              class="delete-button"
              >{{ $t('contacts.contactList.deleteButton') }}</pv-button
            >
          </div>
        </template>
      </pv-card>
    </li>
  </div>
  <div class="add-button">
    <pv-button @click="showCreateForm" class="add-contact">{{
      $t('contacts.contactList.addButton')
    }}</pv-button>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: #b1375b;
  font-size: 40px;
}

.contact-card {
  max-width: 350px;
  text-align: center;
  margin: 10px;
}

.cards {
  display: inline-flex;
  justify-content: center;
}

.contacts-container {
  margin-right: 200px;
  margin-left: 200px;
}

.buttons {
  margin: 8px;
}

.delete-button {
  margin-left: 5px;
}

.add-contact {
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 30px;
  background-color: #e8c8c8;
  color: #041c32;
  border-color: #e8c8c8;
  border-radius: 30px;
  font-size: 18px;
}

.icon {
  margin-top: 10px;
}

.add-button {
  text-align: center;
}
</style>
