import { createRouter, createWebHistory } from 'vue-router';
import GroupOverview from '../components/Groups/views/GroupOverview.vue';
import GroupDetailView from '../components/Groups/views/GroupDetailView.vue';
import GroupCreateView from '../components/Groups/views/GroupCreateView.vue';
import StartPageView from '../components/views/StartPageView.vue';
import ContactForm from '@/contexts/contacto/components/contact-form.vue'
import ContactManagement from '@/contexts/contacto/pages/contact-management.vue'

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
  { path: '/contact', component: ContactManagement },
  { path: '/create-contact', component: ContactForm, name: 'createContact' },
  { path: '/update-contact/:id', component: ContactForm, name: 'updateContact' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
