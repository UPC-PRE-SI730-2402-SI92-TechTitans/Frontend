<script>
export default {
  name: 'GroupDetailView',
  props: ['id'],
  computed: {
    group() {
      const groupId = Number(this.id)
      const group = this.$store.state.groups.find((group) => group.id === groupId)
      return group
    },
    totalDebt() {
      if (!this.group) return 0
      return Object.values(this.group.participants).reduce(
        (total, participant) => total + participant.pendingPayment,
        0
      )
    }
  }
}
</script>

<template>
  <div class="group-details">
    <h2 class="group-title">Detalles del Grupo: {{ group.name }}</h2>
    <p class="group-creation-date">Fecha de creación: {{ group.creationDate }}</p>

    <h3 class="subtitle">Gastos</h3>
    <table class="table">
      <thead class="table-head">
        <tr>
          <th class="table-items">Participante</th>
          <th class="table-items">Cantidad</th>
          <th class="table-items">Fecha</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="(participant, name) in group.participants" :key="name">
          <td class="table-items">{{ name }}</td>
          <td class="table-items">{{ participant.amount }} $</td>
          <td class="table-items">{{ participant.date }}</td>
        </tr>
      </tbody>
    </table>

    <h3 class="subtitle">Saldo total</h3>
    <p class="total-debt">
      Pago pendiente <span>{{ totalDebt }}$</span>
    </p>
    <table class="table">
      <thead class="table-head">
        <tr>
          <th class="table-items">Participante</th>
          <th class="table-items">Pendiente</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="(participant, name) in group.participants" :key="name">
          <td class="table-items">{{ name }}</td>
          <td class="table-items">{{ participant.pendingPayment }} $</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.group-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 15px;
}

.group-title {
  text-align: center;
  color: #c55;
  font-size: 2rem;
  overflow-wrap: anywhere;
}
.group-creation-date {
  text-align: center;
  color: #555;
  font-size: 0.9rem;
}

.subtitle {
  font-size: 1.5rem;
  margin: 50px 0 10px 0;
}

.table {
  width: clamp(400px, 700px, 90%);
  border-collapse: collapse;
  border: 1px solid #111;
  background: linear-gradient(90deg, #fff 20%, #cfcfcf 80%);
}
.table-head {
  font-size: 1.15rem;
}
.table-items {
  padding: 10px;
  text-align: center;
}

.total-debt {
  font-size: 1.33rem;
  margin: 0 0 10px 0;
}
.total-debt span {
  color: #000;
  font-weight: bold;
}
</style>
