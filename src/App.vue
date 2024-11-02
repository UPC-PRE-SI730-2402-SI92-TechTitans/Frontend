<script>
import SidebarMenu from '@/layouts/the-sidebar.vue'
import LoginPage from '@/contexts/security/login/components/login-page.vue'
import RegisterPage from '@/contexts/security/register/components/user-form.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    SidebarMenu,
    LoginPage,
    RegisterPage
  },
  setup() {
    const route = useRoute()

    const isLoginPage = computed(() => route.name === 'login' || route.path === '/login')
    const isRegisterPage = computed(() => route.name === 'register' || route.path === '/register')

    return {
      isLoginPage,
      isRegisterPage
    }
  }
}
</script>

<template>
  <div v-if="isLoginPage">
    <LoginPage />
  </div>
  <div v-else-if="isRegisterPage">
    <RegisterPage />
  </div>
  <div id="app" v-else>
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
