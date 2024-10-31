<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  groups: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['edit', 'delete']);

const editGroup = (group) => {
  emit('edit', group);
};

const deleteGroup = (id) => {
  emit('delete', id);
};
</script>

<template>
  <div v-for="group in props.groups" :key="group.id" class="group-card">
    <router-link :to="`/group/${group.id}`">
      <p class="group-name">{{ group.name }}</p>
    </router-link>
    <p class="group-creation-date">{{ group.creationDate }}</p>
    <div class="group-button-container">
      <button @click.prevent="editGroup(group)" class="group-button edit">{{ $t('groups.groupOverview.buttonEdit') }}</button>
      <button @click.prevent="deleteGroup(group.id)" class="group-button delete">{{ $t('groups.groupOverview.buttonDelete') }}</button>
    </div>
  </div>
</template>

<style scoped>
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
}
.group-image {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  margin: 10px 0;
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

.group-button-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.group-button {
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 0.8rem;
}
.group-button.edit {
  background-color: #5bc0de;
}
.group-button.edit:hover {
  background-color: #46b8da;
}
.group-button.delete {
  background-color: #d9534f;
}
.group-button.delete:hover {
  background-color: #c9302c;
}
</style>
