import { createRouter, createWebHistory } from 'vue-router';
import GroupOverview from '@/contexts/groups/pages/group-overview.page.vue';
import GroupDetailView from '@/contexts/groups/pages/group-detail.page.vue';
import GroupCreateView from '@/contexts/groups/pages/create-group.page.vue';
import StartPageView from '@/contexts/shared/pages/the-home.page.vue';
import ContactForm from '@/contexts/contact/components/contact-form.vue'
import ContactManagement from '@/contexts/contact/pages/contact-management.vue'

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
  { path: '/contacts', component: ContactManagement },
  { path: '/create-contact', component: ContactForm, name: 'createContact' },
  { path: '/update-contact/:id', component: ContactForm, name: 'updateContact' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
