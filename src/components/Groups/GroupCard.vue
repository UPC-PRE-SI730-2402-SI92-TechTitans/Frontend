<script>
export default {
  name: 'GroupCard',
  props: {
    group: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="group-card">
    <div class="group-image"></div>
    <p>{{ group.name }}</p>
  </div>
</template>

<style scoped>
.group-card {
  width: 150px;
  height: 150px;
  background-color: #eee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.group-image {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  margin-bottom: 10px;
}
</style>
