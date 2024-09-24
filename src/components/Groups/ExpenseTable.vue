<script>
export default {
  name: 'ExpenseTable',
  props: {
    expenses: {
      type: Array,
      required: true
    },
    showDate: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="expense-table">
    <table>
      <thead>
        <tr>
          <th>Participante</th>
          <th>Cantidad</th>
          <th v-if="showDate">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in expenses" :key="expense.participant">
          <td>{{ expense.participant }}</td>
          <td>{{ expense.amount }}</td>
          <td v-if="showDate">{{ expense.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.expense-table table {
  width: 100%;
  border-collapse: collapse;
}
.expense-table th,
.expense-table td {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
