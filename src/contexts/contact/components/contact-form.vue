<script setup>
import ContactName from '@/contexts/contact/components/contact-name.vue'
import ContactEmail from '@/contexts/contact/components/contact-email.vue'
import FormActions from '@/contexts/contact/components/form-actions.vue'
import { Contact } from '../models/contact-entity.js'
import { ContactApiService } from '@/contexts/contact/services/contact-api.js'
import { useRoute } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
import router from '@/router/index.js'

const routes = useRoute()
const emit = defineEmits(['cancel', 'save'])
const form = reactive(new Contact())
const contactApiService = new ContactApiService()
const id = ref(routes.params.id || '')

function generateUUID() {
  let d = new Date().getTime()
  let uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

const onSubmit = () => {
  if (id.value !== '') {
    form.userId = localStorage.getItem('userId')

    contactApiService
      .update(id.value, form)
      .then((response) => {
        if (response.status === 200) {
          emit('save')
          router.push('/contacts')
        }
      })
      .catch((error) => {
        console.error('Error al actualizar contacto:', error)
      })
    return
  }

  form.id = generateUUID()
  form.userId = localStorage.getItem('userId')

  contactApiService
    .save(form)
    .then((response) => {
      if (response.status === 201) {
        emit('save')
        router.push('/contacts')
      }
    })
    .catch((error) => {
      console.error('Error al guardar contacto:', error)
    })
}

onMounted(() => {
  if (id.value) {
    contactApiService.get(id.value).then((response) => {
      const contactData = response.data
      form.name = contactData.name
      form.email = contactData.email
      form.id = contactData.id
    })
  }
})

const onCancel = () => {
  form.name = ''
  form.email = ''
  form.id = null
  emit('cancel')
  router.push('/contacts')
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="form-container">
    <h2 class="contact-form-title">{{ $t('contacts.contactForm.title') }}</h2>
    <div class="form-group">
      <contact-name v-model="form.name"></contact-name>
    </div>
    <div class="form-group">
      <contact-email v-model="form.email"></contact-email>
    </div>
    <div class="form-actions">
      <form-actions @save="onSubmit" @cancel="onCancel"></form-actions>
    </div>
  </form>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.contact-form-title {
  margin-bottom: 20px;
  text-align: center;
  color: #b1375b;
  font-size: 2.1rem;
}

.form-group {
  margin-bottom: 10px;
  text-align: right;
}

.form-actions {
  justify-content: center;
  display: flex;
  padding-top: 40px;
}
</style>
