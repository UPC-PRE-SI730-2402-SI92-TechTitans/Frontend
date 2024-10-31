import { createRouter, createWebHistory } from 'vue-router';
import GroupOverview from '@/contexts/groups/pages/group-overview.page.vue';
import GroupDetailView from '@/contexts/groups/pages/group-detail.page.vue';
import GroupCreateView from '@/contexts/groups/pages/create-group.page.vue';
import StartPageView from '@/contexts/shared/pages/the-home.page.vue';
import ContactForm from '@/contexts/contact/components/contact-form.vue'
import ContactManagement from '@/contexts/contact/pages/contact-management.vue'
import GroupExpensesView from '@/contexts/groups/pages/group-expenses.page.vue';
import registerPayment from '@/contexts/payment/components/register-payment.vue'
import expenseDivision from '@/contexts/expenses/components/expense-division.vue'

const routes = [
  { path: '/', name: 'Home', component: StartPageView },
  { path: '/groups', name: 'Groups', component: GroupOverview },
  {
    path: '/group/:id',
    name: 'GroupDetailView',
    component: GroupDetailView,
    props: true
  },
  { path: '/group/create-group', name: 'GroupCreate', component: GroupCreateView },
  { path: '/group/update-group/:id', name: 'updateGroup', component: GroupCreateView, props: true },
  { path: '/group/:id/expenses', name: 'groupExpenses', component: GroupExpensesView, props: true },
  { path: '/contacts', component: ContactManagement },
  { path: '/create-contact', component: ContactForm, name: 'createContact' },
  { path: '/update-contact/:id', component: ContactForm, name: 'updateContact' },
  { path: '/registrar-pago', name: 'RegisterPayment', component: registerPayment },
  { path: '/division-gastos', name: 'ExpenseDivision', component: expenseDivision },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
