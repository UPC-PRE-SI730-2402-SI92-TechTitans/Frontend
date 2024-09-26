<template>
    <div class="nuevo-gasto">
      <h2>Nuevo Gasto por Grupo</h2>
      
      <form @submit.prevent="registrarGasto">
       
        <div class="form-group">
          <label for="monto">Monto</label>
          <input 
            type="number" 
            id="monto" 
            v-model="gasto.monto" 
            placeholder="Ingrese el monto" 
            required 
          />
        </div>
        
       
        <div class="form-group">
          <label for="fecha">Fecha</label>
          <input 
            type="date" 
            id="fecha" 
            v-model="gasto.fecha" 
            required 
          />
        </div>
        
        
        <div class="form-group">
          <label for="grupo">Grupo</label>
          <select 
            id="grupo" 
            v-model="gasto.grupo" 
            required
          >
            <option value="" disabled>Seleccione un grupo</option>
            <option v-for="grupo in grupos" :key="grupo.id" :value="grupo.nombre">{{ grupo.nombre }}</option>
          </select>
        </div>
        
       
        <div class="form-group">
          <button type="button" @click="dividirGastoIgual">Dividir en partes iguales</button>
        </div>
        
    
        <div class="form-group">
          <button type="submit">Registrar Gasto</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gasto: {
          monto: 0,
          fecha: '',
          grupo: '',
        },
        grupos: [
          { id: 1, nombre: 'Amigos' },
          { id: 2, nombre: 'Familia' },
          { id: 3, nombre: 'Trabajo' },
         
        ],
      };
    },
    methods: {
      dividirGastoIgual() {
        
        alert('El gasto se dividirá en partes iguales.');
      },
      registrarGasto() {
        
        if (this.gasto.monto && this.gasto.fecha && this.gasto.grupo) {
          alert(`Gasto registrado: ${this.gasto.monto} para el grupo ${this.gasto.grupo} en la fecha ${this.gasto.fecha}`);
          
        } else {
          alert('Por favor, complete todos los campos antes de registrar el gasto.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .nuevo-gasto {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  