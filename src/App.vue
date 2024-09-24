<script>
// import SidebarMenu from './components/SideBarMenu.vue
// Aun estoy trabajando en esto

export default {
  components: {
    //SidebarMenu
  }
}
</script>

<template>
  <div id="app">
    <!--<SidebarMenu />-->
    <router-view />
  </div>
</template>

<style>
#app {
  display: flex;
}
</style>
