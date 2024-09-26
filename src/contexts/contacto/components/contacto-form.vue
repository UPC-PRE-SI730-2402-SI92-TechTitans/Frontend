<script setup>
import ContactoName from '@/contexts/contacto/components/contacto-name.vue'
import ContactoEmail from '@/contexts/contacto/components/contacto-email.vue'
import FormActions from '@/contexts/contacto/components/form-actions.vue'
import { Contacto } from '../models/contacto-entity.js'
import { ContactoApiService } from '@/contexts/contacto/services/contacto-api.js'
import { useRoute } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
import router from '@/router/index.js'

const routes = useRoute()
const emit = defineEmits(['cancelar'])
const form = reactive(new Contacto())
const contactoApiService = new ContactoApiService()
const id = ref(routes.params.id || '')

const onSubmit = () => {
  if (id.value !== '') {
    contactoApiService
      .update(id.value, form)
      .then((response) => {
        if (response.status == 200) {
          router.push('/contacto')
        }
        emit('guardar')
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    return
  }

  const { id: omitId, ...newContactoData } = form
  contactoApiService
    .save(newContactoData)
    .then((response) => {
      if (response.status == 201) {
        router.push('/contacto')
      }
      emit('guardar')
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

onMounted(() => {
  if (id.value) {
    contactoApiService.get(id.value).then((response) => {
      const contactoData = response.data

      form.name = contactoData.name
      form.email = contactoData.email
      form.id = contactoData.id
    })
  }
})

const onCancel = () => {
  form.name = ''
  form.email = ''
  form.id = 0

  emit('cancelar')
}
</script>

<template>
  <div class="contacto-form-container">
    <form @submit.prevent="onSubmit" class="form-container">
      <h1>Nuevo contacto</h1>
      <div class="form-group">
        <contacto-name v-model="form.name"></contacto-name>
      </div>
      <div class="form-group">
        <contacto-email v-model="form.email"></contacto-email>
      </div>
      <div class="form-actions">
        <form-actions @guardar="onSubmit" @cancelar="onCancel"></form-actions>
      </div>
    </form>
  </div>
</template>

<style scoped>
.contacto-form-container {
}
.form-container {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 10px;
}

.form-actions {
  justify-content: center;
  display: flex;
  padding-top: 40px;
}

h1 {
  text-align: center;
  color: #b1375b;
}
</style>
