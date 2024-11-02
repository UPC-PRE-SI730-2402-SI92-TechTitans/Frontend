<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ParticipantList from '../components/participant-list.component.vue'
import { GroupApiService, ContactApiService } from '../services/group-api.js'

const route = useRoute()
const router = useRouter()
const groupApiService = new GroupApiService()
const contactApiService = new ContactApiService()

const group = ref({ name: '', description: '', participants: {} })
const contacts = ref([])
const isEdit = ref(false)

const loadContacts = async () => {
  const userId = localStorage.getItem('userId')
  const response = await contactApiService.getAll()

  contacts.value = response.data.filter((contact) => contact.userId === userId)
}

const loadGroup = async (id) => {
  const response = await groupApiService.get(id)
  group.value = response.data
  isEdit.value = true
}

const saveGroup = async () => {
  if (!isEdit.value) {
    group.value.creationDate = new Date().toISOString().split('T')[0]
  }

  if (isEdit.value) {
    await groupApiService.update(group.value.id, group.value)
  } else {
    await groupApiService.save(group.value)
  }
  router.push('/groups')
}

onMounted(async () => {
  await loadContacts()
  if (route.params.id) {
    await loadGroup(route.params.id)
  }
})
</script>

<template>
  <div class="create-group">
    <form class="create-group-form" @submit.prevent="saveGroup">
      <h2 class="form-title">
        {{ isEdit ? $t('groups.createGroup.titleEdit') : $t('groups.createGroup.titleCreate') }}
      </h2>

      <div class="form-item">
        <label for="name" class="item-label">{{ $t('groups.createGroup.name') }}</label>
        <input type="text" id="name" v-model="group.name" required />
      </div>

      <div class="form-item">
        <label for="description" class="item-label">{{
          $t('groups.createGroup.description')
        }}</label>
        <textarea id="description" v-model="group.description" required></textarea>
      </div>

      <div class="form-item">
        <label for="participants" class="item-label">{{
          $t('groups.createGroup.participants')
        }}</label>
        <ParticipantList :contacts="contacts" v-model="group.participants" />
      </div>

      <div class="form-actions">
        <router-link to="/groups">
          <button type="button" class="button button-cancel">
            {{ $t('groups.createGroup.buttonCancel') }}
          </button>
        </router-link>
        <button type="submit" class="button button-create">
          {{ $t('groups.createGroup.buttonSave') }}
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.create-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
}
.create-group-form {
  width: clamp(320px, 50%, 800px);
  background-color: #444;
  box-shadow: 0 0 10px #000;
  border-radius: 8px;
  font-size: 1.22rem;
  padding: 30px;
  color: #ddd;
}

.form-title {
  padding-bottom: 15px;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 1.5em;
  text-align: center;
}
.item-label {
  color: #bfbfbf;
  font-size: 0.77em;
}
#name,
#description {
  width: 100%;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px #0003;
  background-color: transparent;
  color: inherit;
  margin: 3px 0 20px 0;
}
#name,
#description:focus {
  outline: none;
}
#description {
  font-family: sans-serif;
  min-width: 100%;
  resize: none;
  min-height: 100px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}
.button {
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  box-shadow: 0 0 5px #0003;
  background-color: transparent;
  color: #ddd;
  transition: color 0.3s;
}
.button:hover {
  outline: 1px solid #0002;
  color: #444;
  cursor: pointer;
}
.button-create,
.button-cancel {
  font-size: 0.9rem;
  transition: background-color 0.3s;
}
.button-create:hover {
  background-color: #498;
}
.button-cancel:hover {
  background-color: #c55;
}
</style>
