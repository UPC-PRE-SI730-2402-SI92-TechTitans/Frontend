<script>
import ExpenseTable from '../ExpenseTable.vue'

export default {
  name: 'GroupDetailsView',
  components: {
    ExpenseTable
  },
  data() {
    return {
      expenses: [
        { participant: 'Juan', amount: 50, date: '2024-09-21' },
        { participant: 'Ana', amount: 100, date: '2024-09-22' }
      ],
      balances: [
        { participant: 'Juan', amount: 25 },
        { participant: 'Ana', amount: 75 }
      ],
      pendingPayment: 100
    }
  }
}
</script>

<template>
  <div class="group-details">
    <h2>Detalles del grupo</h2>
    <ExpenseTable :expenses="expenses" />
    <div class="total-balance">
      <p>Pago pendiente: {{ pendingPayment }}</p>
      <ExpenseTable :expenses="balances" />
    </div>
  </div>
</template>

<style scoped>
.group-details {
  padding: 20px;
}
.total-balance {
  margin-top: 20px;
}
</style>
