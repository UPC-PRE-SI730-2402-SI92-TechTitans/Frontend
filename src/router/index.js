import { createRouter, createWebHistory } from 'vue-router'
import GroupOverview from '@/contexts/groups/pages/group-overview.page.vue'
import GroupDetailView from '@/contexts/groups/pages/group-detail.page.vue'
import GroupCreateView from '@/contexts/groups/pages/create-group.page.vue'
import StartPageView from '@/contexts/shared/pages/the-home.page.vue'
import ContactForm from '@/contexts/contact/components/contact-form.vue'
import ContactManagement from '@/contexts/contact/pages/contact-management.vue'
import GroupExpensesView from '@/contexts/expenses/pages/group-expenses.page.vue'
import Login from '@/contexts/security/login/components/login-page.vue'
import UserForm from '@/contexts/security/register/components/user-form.vue'
import selectGroupExpenses from '@/contexts/expenses/pages/select-group-expenses.page.vue'

const routes = [
  { path: '/', name: 'Home', component: StartPageView },
  { path: '/groups', name: 'Groups', component: GroupOverview, meta: { requiresAuth: true } },
  {
    path: '/group/:id',
    name: 'GroupDetailView',
    component: GroupDetailView,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/group/create-group',
    name: 'GroupCreate',
    component: GroupCreateView,
    meta: { requiresAuth: true }
  },
  {
    path: '/group/update-group/:id',
    name: 'updateGroup',
    component: GroupCreateView,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/group/:id/expenses',
    name: 'groupExpenses',
    component: GroupExpensesView,
    props: true,
    meta: { requiresAuth: true }
  },
  { path: '/contacts', component: ContactManagement, meta: { requiresAuth: true } },
  {
    path: '/create-contact',
    component: ContactForm,
    name: 'createContact',
    meta: { requiresAuth: true }
  },
  {
    path: '/update-contact/:id',
    component: ContactForm,
    name: 'updateContact',
    meta: { requiresAuth: true }
  },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: UserForm, name: 'register' },
  { path: '/payments', component: selectGroupExpenses, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken')
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
