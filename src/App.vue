<script>
import SidebarMenu from '@/layouts/the-sidebar.vue'

export default {
  components: {
    SidebarMenu
  }
}
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
