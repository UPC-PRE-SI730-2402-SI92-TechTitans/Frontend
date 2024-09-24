<script>
export default {
  name: 'SidebarMenu'
}
</script>

<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/grupos">Grupos</router-link></li>
      <li><router-link to="/registro-gastos">Registro de gastos</router-link></li>
      <!-- Add remaining menu items here -->
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #3a4f63;
  color: white;
  padding: 10px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin: 10px 0;
}
.sidebar a {
  color: white;
  text-decoration: none;
}
</style>
