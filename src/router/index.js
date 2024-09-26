import { createRouter, createWebHistory } from 'vue-router'
import GroupOverview from '../components/Groups/views/GroupOverview.vue'
import GroupDetailView from '../components/Groups/views/GroupDetailView.vue'
import GroupCreateView from '../components/Groups/views/GroupCreateView.vue'
import StartPageView from '../components/views/StartPageView.vue'
import registerPayment from '@/contexts/payment/components/register-payment.vue'
import expenseDivision from '@/contexts/expenses/components/expense-division.vue'
import ContactoForm from '@/contexts/contacto/components/contacto-form.vue'
import ContactoManagement from '@/contexts/contacto/pages/contacto-management.vue'

const routes = [
  { path: '/', name: 'Home', component: StartPageView },
  { path: '/grupos', name: 'Groups', component: GroupOverview },
  {
    path: '/grupo/:id',
    name: 'GroupDetailView',
    component: GroupDetailView,
    props: true
  },
  { path: '/grupo/crear-grupo', name: 'GroupCreate', component: GroupCreateView },
  { path: '/registrar-pago', name: 'RegisterPayment', component: registerPayment },
  { path: '/division-gastos', name: 'ExpenseDivision', component: expenseDivision },
  { path: '/contacto', component: ContactoManagement },
  { path: '/create-contacto', component: ContactoForm, name: 'createContacto' },
  { path: '/update-contacto/:id', component: ContactoForm, name: 'updateContacto' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
