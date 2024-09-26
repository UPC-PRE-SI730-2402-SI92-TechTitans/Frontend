<script>
import { mapState } from 'vuex';

export default {
  name: 'GroupCard',
  computed: {
    ...mapState({
      groups: state => state.groups
    })
  }
}
</script>

<template>
  <div class="group-card" v-for="group in groups" :key="group.id">
    <div class="group-image">
      <img src="https://picsum.photos/100/100" alt="Group image" class="item-image" />
    </div>
    <router-link :to="`/grupo/${group.id}`">
      <p class="group-name">{{ group.name }}</p>
    </router-link>
    <p class="group-creation-date">{{ group.creationDate }}</p>
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
</style>
