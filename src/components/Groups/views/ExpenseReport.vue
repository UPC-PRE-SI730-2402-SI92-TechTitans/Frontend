<template>
  <div class="informe-gastos">
    <h2>Informe de Gastos</h2>

    <ul class="gastos-lista">
      <li v-for="gasto in gastos" :key="gasto.id">
        {{ gasto.descripcion }}: {{ gasto.monto }} {{ monedaOriginal }}
      </li>
    </ul>

    <div class="form-group">
      <label for="moneda">Convertir a:</label>
      <select id="moneda" v-model="monedaSeleccionada">
        <option v-for="moneda in monedas" :key="moneda.codigo" :value="moneda.codigo">
          {{ moneda.nombre }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <button @click="convertirMoneda">Convertir</button>
    </div>

    <div v-if="gastosConvertidos.length">
      <h3>Gastos Convertidos</h3>
      <ul class="gastos-lista">
        <li v-for="gasto in gastosConvertidos" :key="gasto.id">
          {{ gasto.descripcion }}: {{ gasto.monto }} {{ monedaSeleccionada }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monedaOriginal: 'PEN',
      monedaSeleccionada: '',
      tasasCambio: {
        EUR: 0.24,
        USD: 0.27,
        JPY: 38.28,
        ARS: 256.79
      },
      monedas: [
        { codigo: 'EUR', nombre: 'Euros' },
        { codigo: 'USD', nombre: 'Dolares Americanos' },
        { codigo: 'JPY', nombre: 'Yen Japonés' },
        { codigo: 'ARS', nombre: 'Peso Argentino' }
      ],
      gastos: [
        { id: 1, descripcion: 'Cena', monto: 100 },
        { id: 2, descripcion: 'Transporte', monto: 50 },
        { id: 3, descripcion: 'Hotel', monto: 300 }
      ],
      gastosConvertidos: []
    }
  },
  methods: {
    convertirMoneda() {
      if (!this.monedaSeleccionada) {
        alert('Seleccione una moneda para la conversión.')
        return
      }

      const tasa = this.tasasCambio[this.monedaSeleccionada]

      this.gastosConvertidos = this.gastos.map((gasto) => {
        return {
          ...gasto,
          monto: (gasto.monto * tasa).toFixed(2) //
        }
      })

      alert(`Conversión realizada a ${this.monedaSeleccionada}`)
    }
  }
}
</script>

<style scoped>
.informe-gastos {
  max-width: 500px;
  margin: 0 auto;
}

.gastos-lista {
  list-style-type: none;
  padding: 0;
}

.gastos-lista li {
  margin-bottom: 10px;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

h2,
h3 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}
</style>
