<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { GroupApiService } from '../services/group-api.js';

const route = useRoute();
const groupApiService = new GroupApiService();
const group = ref(null);

const loadGroup = async (id) => {
  try {
    const response = await groupApiService.get(id);
    group.value = response.data;
  } catch (error) {
    console.error("Error al cargar el grupo:", error);
  }
};

const totalDebt = computed(() => {
  if (!group.value || !group.value.participants) return 0;
  
  return Object.values(group.value.participants).reduce((total, participant) => {
    return total + (parseFloat(participant.pendingPayment) || 0);
  }, 0);
});

onMounted(() => {
  const groupId = route.params.id;
  if (groupId) {
    loadGroup(groupId);
  }
});
</script>

<template>
  <div class="group-details" v-if="group">
    <h2 class="group-title">{{ $t('groups.groupDetail.title') }} {{ group.name }}</h2>
    <p class="group-creation-date">{{ $t('groups.groupDetail.creationDate') }} {{ group.creationDate }}</p>

    <h3 class="subtitle">{{ $t('groups.groupDetail.expenses') }}</h3>
    <table class="table">
      <thead class="table-head">
        <tr>
          <th class="table-items">{{ $t('groups.groupDetail.participant') }}</th>
          <th class="table-items">{{ $t('groups.groupDetail.amount') }}</th>
          <th class="table-items">{{ $t('groups.groupDetail.date') }}</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="(participant, name) in group.participants" :key="name">
          <td class="table-items">{{ participant.name }}</td>
          <td class="table-items">{{ participant.amount }} $</td>
          <td class="table-items">{{ participant.date }}</td>
        </tr>
      </tbody>
    </table>

    <h3 class="subtitle">{{ $t('groups.groupDetail.totalBalance') }}</h3>
    <p class="total-debt">
      {{ $t('groups.groupDetail.pendingPayment') }} <span>{{ totalDebt }}$</span>
    </p>
    <table class="table">
      <thead class="table-head">
        <tr>
          <th class="table-items">{{ $t('groups.groupDetail.participant') }}</th>
          <th class="table-items">{{ $t('groups.groupDetail.pending') }}</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="(participant, name) in group.participants" :key="name">
          <td class="table-items">{{ participant.name }}</td>
          <td class="table-items">{{ participant.pendingPayment }} $</td>
        </tr>
      </tbody>
    </table><br><br>

    <router-link :to="{ name: 'groupExpenses', params: { id: group.id } }">
      <button type="button" class="button-edit-expenses">{{ $t('groups.groupDetail.editExpensesButton') }}</button>
    </router-link>
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
.button-edit-expenses {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #c55;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
}
.button-edit-expenses:hover {
  background-color: #a44;
}
</style>
