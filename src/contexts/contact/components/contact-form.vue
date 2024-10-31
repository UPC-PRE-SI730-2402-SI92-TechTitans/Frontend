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
const emit = defineEmits(['cancel'])
const form = reactive(new Contact())
const contactApiService = new ContactApiService()
const id = ref(routes.params.id || '')

const onSubmit = () => {
  if (id.value !== '') {
    contactApiService
      .update(id.value, form)
      .then((response) => {
        if (response.status == 200) {
          router.push('/contacts')
        }
        emit('save')
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    return
  }

  const { id: omitId, ...newContactData } = form
    contactApiService
      .save(newContactData)
      .then((response) => {
        if (response.status == 201) {
          router.push('/contacts')
        }
        emit('save')
      })
      .catch((error) => {
        console.error('Error:', error)
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
    form.id = 0

    emit('cancel')
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="form-container">
    <h1>{{ $t('contacts.contactForm.title')}}</h1>
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
}

.form-group {
  margin-bottom: 10px;
}

.form-actions {
  justify-content: center;
  display: flex;
  padding-top: 40px;
}

h1{
  text-align: center;
  color: #B1375B;
}
</style>
