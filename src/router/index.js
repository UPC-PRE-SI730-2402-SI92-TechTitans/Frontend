import { createRouter, createWebHistory } from 'vue-router'
import GroupOverview from '../components/Groups/views/GroupOverview.vue'
import GroupDetailsView from '../components/Groups/views/GroupDetailsView.vue'

const routes = [
  { path: '/', name: 'Home', component: GroupOverview },
  { path: '/grupos', name: 'Groups', component: GroupOverview },
  { path: '/grupo/:id', name: 'GroupDetails', component: GroupDetailsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
