<script setup>
import { defineProps, defineEmits } from 'vue'
import 'primeicons/primeicons.css'

const props = defineProps({
  contactos: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['edit', 'delete', 'create'])

const deleteContacto = (id) => {
  emit('delete', id)
}

const showCreateForm = () => {
  emit('create')
}
</script>

<template>
  <h2>Contactos</h2>
  <div class="contactos-container">
    <li v-for="contacto in contactos" :key="contacto.id || contacto.name" class="cards">
      <pv-card class="contacto-card">
        <template #header>
          <pv-avatar icon="pi pi-user" size="xlarge" shape="circle" class="icono"> </pv-avatar>
        </template>
        <template #content>
          Nombre: {{ contacto.name || '' }}
          <br />
          Correo electrónico: {{ contacto.email || '' }}
        </template>
        <template #footer>
          <div class="botones">
            <router-link
              v-if="contacto.id"
              :to="{ name: 'updateContacto', params: { id: contacto.id } }"
              >Editar</router-link
            >

            <pv-button
              v-if="contacto.id"
              @click="deleteContacto(contacto.id)"
              severity="danger"
              class="eliminar-boton"
              label="Eliminar"
            />
          </div>
        </template>
      </pv-card>
    </li>
  </div>
  <div class="agregar-boton">
    <pv-button @click="showCreateForm" label="Añadir contacto" class="agregar-contacto" />
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: #b1375b;
  font-size: 40px;
}

.contacto-card {
  max-width: 350px;
  text-align: center;
  margin: 10px;
}

.cards {
  display: inline-flex;
  justify-content: center;
}

.contactos-container {
  margin-right: 200px;
  margin-left: 200px;
}

.botones {
  margin: 8px;
}

.eliminar-boton {
  margin-left: 5px;
}

.agregar-contacto {
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 30px;
  background-color: #e8c8c8;
  color: #041c32;
  border-color: #e8c8c8;
  border-radius: 30px;
  font-size: 18px;
}

.icono {
  margin-top: 10px;
}

.agregar-boton {
  text-align: center;
}
</style>
