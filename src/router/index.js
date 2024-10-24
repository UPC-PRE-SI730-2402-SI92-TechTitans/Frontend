import { createRouter, createWebHistory } from 'vue-router';
import GroupOverview from '@/contexts/groups/pages/group-overview.page.vue';
import GroupDetailView from '@/contexts/groups/pages/group-detail.page.vue';
import GroupCreateView from '@/contexts/groups/pages/create-group.page.vue';
import StartPageView from '@/contexts/shared/pages/the-home.page.vue';
import ContactoForm from '@/contexts/contacto/components/contacto-form.vue'
import ContactoManagement from '@/contexts/contacto/pages/contacto-management.vue'

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
  { path: '/contacto', component: ContactoManagement },
  { path: '/create-contacto', component: ContactoForm, name: 'createContacto' },
  { path: '/update-contacto/:id', component: ContactoForm, name: 'updateContacto' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
