<script>
export default {
  name: 'ParticipantList'
}
</script>

<template>
  <div class="participant-list-container">
    <div class="add-participant">
      <input type="text" placeholder="Nombre del participante" class="participant-name-input" />
      <button type="button" class="material-symbols-outlined" title="Agregar participante">
        Add
      </button>
    </div>
    <div class=".remove-participant">
      <ul class="participant-list">
        <li class="participant-item">
          <p class="participant-name">Jose</p>
          <button type="button" class="material-symbols-outlined" title="Eliminar participante">
            Remove
          </button>
        </li>
        <li class="participant-item">
          <p class="participant-name">Manuel</p>
          <button type="button" class="material-symbols-outlined" title="Eliminar participante">
            Remove
          </button>
        </li>
        <li class="participant-item">
          <p class="participant-name">Rosa</p>
          <button type="button" class="material-symbols-outlined" title="Eliminar participante">
            Remove
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.participant-list-container {
  margin-bottom: 15px;
}

.add-participant {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.participant-name-input,
.add-participant button,
.participant-item button {
  background-color: transparent;
  color: inherit;
  border: none;
  box-shadow: 0 0 5px #0003;
  border-radius: 4px;
}
.participant-name-input {
  flex: 1;
  padding: 6px 12px;
  margin-right: 5px;
}
.participant-name-input:focus {
  outline: none;
}
.add-participant button,
.participant-item button {
  padding: 1px;
}
.add-participant button:hover,
.participant-item button:hover {
  outline: 1px solid #0003;
  cursor: pointer;
}

.remove-participant {
  display: flex;
  flex-direction: column;
}
.participant-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.participant-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
}
.participant-name {
  font-size: 1.1rem;
}
</style>
