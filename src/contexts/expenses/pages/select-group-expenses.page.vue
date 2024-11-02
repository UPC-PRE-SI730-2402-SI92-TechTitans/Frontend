<script setup>
import { onBeforeMount, ref } from 'vue'
import { GroupApiService } from '../../groups/services/group-api.js'

const groupApiService = new GroupApiService()
const groups = ref([])

const loadGroups = async () => {
  const response = await groupApiService.getAll()
  groups.value = response.data
}

onBeforeMount(loadGroups)
</script>

<template>
  <div class="group-overview">
    <h2 class="group">{{ $t('groups.groupOverview.title') }}</h2>
    <div class="group-list">
      <div v-for="group in groups" :key="group.id">
        <router-link :to="`/group/${group.id}/expenses`" class="group-card">
          <p class="group-name">{{ group.name }}</p>
          <p class="group-creation-date">{{ group.creationDate }}</p>
        </router-link>
      </div>
    </div>
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

.group-card {
  min-width: 150px;
  max-width: 200px;
  min-height: 150px;
  background-color: #eee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  overflow-wrap: anywhere;
  text-decoration: none;
  color: inherit;
}
.group-card a {
  text-decoration: none;
  color: inherit;
}
.group-name {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  text-align: center;
  padding: 0 20px;
}
.group-creation-date {
  font-size: 0.7rem;
  color: #666;
  margin: 1px 0 7px 0;
}
</style>
