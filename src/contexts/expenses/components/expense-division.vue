<script>

import ParticipantList from '@/components/Groups/ParticipantList.vue'

export default {
  name: 'ExpenseDivision',
  components: { ParticipantList }
};
</script>

<template>
  <div class="create-group">
    <form class="create-group-form">
      <h2 class="form-title">Division de Gastos</h2>
      <div class="form-item">
        <label for="participants" class="item-label">Participantes</label>
        <ParticipantList/>
      </div>
      <div class="form-item">
        <label for="name" class="item-label">Porcentaje</label>
        <input type="text" id="name" required />
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
  font-size:0.77em;
}
#name, #description {
  width: 100%;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px #0003;
  background-color: transparent;
  color: inherit;
  margin: 3px 0 20px 0;
}
#name, #description:focus {
  outline: none;
}
#description {
  font-family: sans-serif;
  min-width: 100%;
  resize: none;
  min-height:100px;
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
.button-create, .button-cancel {
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