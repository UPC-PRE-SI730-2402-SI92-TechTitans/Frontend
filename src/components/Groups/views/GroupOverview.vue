<script>
import GroupCard from '../GroupCard.vue'

export default {
  name: 'GroupOverview',
  components: {
    GroupCard
  },
  data() {
    return {
      groups: [
        { id: 1, name: 'Viaje a la playa' },
        { id: 2, name: 'Casa de campo' },
        { id: 3, name: 'Proyecto de oficina' }
      ]
    }
  },
  methods: {
    createGroup() {
      // Logic for creating a new group
      console.log('Creating new group')
    }
  }
}
</script>

<template>
  <div class="group-overview">
    <h2>Grupos</h2>
    <div class="group-list">
      <GroupCard v-for="group in groups" :key="group.id" :group="group" />
    </div>
    <button @click="createGroup" class="btn-create">Crear grupo</button>
  </div>
</template>

<style scoped>
.group-overview {
  padding: 20px;
}
.group-list {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.btn-create {
  background-color: #efc4c4;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
