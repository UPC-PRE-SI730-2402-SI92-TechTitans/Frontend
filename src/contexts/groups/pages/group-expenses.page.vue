<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { GroupApiService } from '../services/group-api.js';

const route = useRoute();
const router = useRouter();
const groupApiService = new GroupApiService();
const group = ref(null);

const loadGroup = async (id) => {
  try {
    const response = await groupApiService.get(id);
    group.value = response.data;

    Object.values(group.value.participants).forEach((participant) => {
      participant.previousAmount = participant.amount;
      participant.previousPendingPayment = participant.pendingPayment;
    });
  } catch (error) {
    console.error("Error al cargar el grupo:", error);
  }
};

const saveExpenses = async () => {
  try {
    const currentDate = new Date().toISOString().split('T')[0];

    for (const participant of Object.values(group.value.participants)) {
      if (participant.amount !== participant.previousAmount) {
        if (participant.amount > 0) {
          participant.date = currentDate;
        } else {
          delete participant.date;
        }
      }
    }

    await groupApiService.update(group.value.id, group.value);
    router.push(`/group/${group.value.id}`);
  } catch (error) {
    console.error("Error al guardar los gastos:", error);
  }
};

onMounted(() => {
  const groupId = route.params.id;
  if (groupId) {
    loadGroup(groupId);
  }
});
</script>

<template>
  <div class="group-expenses" v-if="group">
    <h2>{{ group.name }}</h2><br>
    <table class="expense-table">
      <thead>
        <tr>
          <th>{{ $t('groups.groupDetail.participant') }}</th>
          <th>{{ $t('groups.groupDetail.amount') }}</th>
          <th>{{ $t('groups.groupDetail.pendingPayment') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(participant, name) in group.participants" :key="name">
          <td>{{ participant.name }}</td>
          <td>
            <pv-input-number v-model="participant.amount" inputId="currency-us" showButtons mode="currency" currency="USD" locale="en-US" fluid class="input-number" />
          </td>
          <td>
            <pv-input-number v-model="participant.pendingPayment" inputId="minmax-buttons" showButtons mode="currency" currency="USD" locale="en-US" fluid class="input-number" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="actions">
      <router-link :to="`/group/${group.id}`">
        <button type="button" class="button-cancel">{{ $t('groups.groupDetail.expensesButtonCancel') }}</button>
      </router-link>
      <button @click="saveExpenses" class="button-save">{{ $t('groups.groupDetail.expensesButtonSave') }}</button>
    </div>
  </div>
</template>

<style scoped>
.group-expenses {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.expense-table {
  width: 100%;
  border-collapse: collapse;
}

.expense-table th, .expense-table td {
  padding: 8px;
  text-align: center;
  border: 1px solid #ccc;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.button-cancel, .button-save {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}

.button-cancel {
  background-color: #d9534f;
}
.button-cancel:hover {
  background-color: #c9302c;
}

.button-save {
  background-color: #5cb85c;
}
.button-save:hover {
  background-color: #4cae4c;
}
</style>
