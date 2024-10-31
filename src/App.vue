<script>
import SidebarMenu from '@/layouts/the-sidebar.vue'
import LoginPage from '@/contexts/login/components/login-page.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

export default {
  components: {
    SidebarMenu,
    LoginPage
  }
}
const isLoginPage = computed(() => route.name === 'login' || route.path === '/')
</script>

<template>
  <div id="app">
    <SidebarMenu />
    <router-view />
  </div>
</template>

<style>
#app {
  display: flex;
}
#app:last-child {
  flex: 1;
}
@media screen and (max-width: 700px) {
  #app {
    flex-direction: column;
  }
}
</style>
