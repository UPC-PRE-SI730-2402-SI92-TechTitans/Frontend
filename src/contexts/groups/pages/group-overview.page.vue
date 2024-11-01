<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import GroupCard from '../components/group-card.component.vue'
import { GroupApiService } from '../services/group-api.js'

const router = useRouter()
const groupApiService = new GroupApiService()
const groups = ref([])

const loadGroups = async () => {
  const response = await groupApiService.getAll()
  groups.value = response.data
}

const loadForm = (group) => {
  router.push({ name: 'updateGroup', params: { id: group.id } })
}

const deleteGroup = async (id) => {
  await groupApiService.delete(id)
  await loadGroups()
}

onBeforeMount(loadGroups)
</script>

<template>
  <div class="group-overview">
    <h2 class="group">{{ $t('groups.groupOverview.title') }}</h2>
    <div class="group-list">
      <GroupCard :groups="groups" @edit="loadForm" @delete="deleteGroup" />
    </div>
    <router-link to="/group/create-group">
      <input
        type="button"
        :value="$t('groups.groupOverview.buttonCreateGroup')"
        class="btn-create"
      />
    </router-link>
  </div>
</template>

<style scoped>
.group-overview {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.group {
  color: #c55;
  font-size: 2rem;
  margin: 20px 0 0 0;
}
.group-list {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-around;
  padding: 50px;
  border: 3px solid #111;
  margin: 50px 0;
}
.btn-create {
  background-color: #efc5c5;
  color: #444;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  transition:
    color 0.6s,
    background-color 0.6s;
  margin: 0 0 50px 0;
}
.btn-create:hover {
  background-color: #444;
  color: #efc5c5;
}
</style>
