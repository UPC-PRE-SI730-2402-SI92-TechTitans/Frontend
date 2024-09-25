<script setup>

import { onBeforeMount, ref } from 'vue'
import ContactoList from '@/contexts/contacto/components/contacto-list.vue'
import ContactoForm from '@/contexts/contacto/components/contacto-form.vue'
import { Contacto } from '../models/contacto-entity.js'
import { ContactoApiService } from '@/contexts/contacto/services/contacto-api.js'

const contactoApiService = new ContactoApiService()

const contactos = ref([])

const selectedContacto = ref({})
const isFormVisible = ref(false)
const isEdit = ref(false)

const loadForm = (contacto) => {
  selectedContacto.value = { ...contacto }
  isFormVisible.value = true
  isEdit.value = true
}

const showCreateForm = () => {
  selectedContacto.value = new Contacto()
  isFormVisible.value = true
  isEdit.value = false
}

const saveContacto = async () => {
  await loadContactos()
  isFormVisible.value = false
}

const cancelForm = () => {
  isFormVisible.value = false
}

const deleteContacto = async (id) => {
  await contactoApiService.delete(id).then(() => {
    loadContactos()
  })
}

const loadContactos = async () => {
  const response = await contactoApiService.getAll()
  contactos.value = response.data
}

onBeforeMount(async () => {
  await loadContactos()
})
</script>

<template>
  <div>
    <ContactoList
      v-if="!isFormVisible"
      :contactos="contactos"
      @edit="loadForm"
      @delete="deleteContacto"
      @create="showCreateForm"
    />

    <ContactoForm
      v-else
      :contacto="selectedContacto"
      :isEdit="isEdit"
      @guardar="saveContacto"
      @cancelar="cancelForm"
    />
  </div>
</template>

<style scoped>
</style>