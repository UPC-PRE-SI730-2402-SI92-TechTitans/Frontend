<script setup>

import { onBeforeMount, ref } from 'vue'
import ContactList from '@/contexts/contact/components/contact-list.vue'
import ContactForm from '@/contexts/contact/components/contact-form.vue'
import { Contact } from '../models/contact-entity.js'
import { ContactApiService } from '@/contexts/contact/services/contact-api.js'

const contactApiService = new ContactApiService()

const contacts = ref([])

const selectedContact = ref({})
const isFormVisible = ref(false)
const isEdit = ref(false)

const loadForm = (contact) => {
  selectedContact.value = { ...contact }
  isFormVisible.value = true
  isEdit.value = true
}

const showCreateForm = () => {
  selectedContact.value = new Contact()
  isFormVisible.value = true
  isEdit.value = false
}

const saveContact = async () => {
  await loadContacts()
  isFormVisible.value = false
}

const cancelForm = () => {
  isFormVisible.value = false
}

const deleteContact = async (id) => {
  await contactApiService.delete(id).then(() => {
    loadContacts()
  })
}

const loadContacts = async () => {
  const response = await contactApiService.getAll()
  contacts.value = response.data
}

onBeforeMount(async () => {
  await loadContacts()
})
</script>

<template>
  <div>
    <ContactList
      v-if="!isFormVisible"
      :contacts="contacts"
      @edit="loadForm"
      @delete="deleteContact"
      @create="showCreateForm"
    />

    <ContactForm
      v-else
      :contact="selectedContact"
      :isEdit="isEdit"
      @save="saveContact"
      @cancel="cancelForm"
    />
  </div>
</template>

<style scoped>
</style>
