<script>
export default {
  name: 'SidebarMenu'
}
</script>

<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <li class="list-item"><router-link to="/" class="item-link">Inicio</router-link></li>
      <li class="list-item"><router-link to="/grupos" class="item-link">Grupos</router-link></li>
      <li class="list-item">
        <router-link to="/registro-gastos" class="item-link">Registro de gastos</router-link>
      </li>
      <li class="list-item">
        <router-link to="/nuevo-gasto" class="item-link">Nuevo gasto</router-link>
      </li>
      <li class="list-item">
        <router-link to="/registrar-pago" class="item-link">Registrar pago</router-link>
      </li>
      <li class="list-item">
        <router-link to="/historial-gastos" class="item-link">Historial de gastos</router-link>
      </li>
      <li class="list-item">
        <router-link to="/informe-gastos" class="item-link">Informe de gastos</router-link>
      </li>
      <li class="list-item">
        <router-link to="/reportes" class="item-link">Reportes</router-link>
      </li>
      <li class="list-item">
        <router-link to="/contacto" class="item-link">Contactos</router-link>
      </li>
      <li class="list-item">
        <router-link to="/division-gastos" class="item-link">División de gastos</router-link>
      </li>
      <li class="list-item">
        <router-link to="/analisis-pagos" class="item-link">Análisis de pagos</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 100dvh;
  background-color: #3a4f63;
  color: #ddd;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 170px;;
}
.sidebar-list {
  text-align: center;
  list-style: none;
}
.list-item {
  margin: 1.6rem 0;
}
.item-link {
  color: #cfcfcf;
  text-decoration: none;
  font-size: 1.2rem;
  transition: font-size 0.01s linear;
}
.item-link:hover {
  color: #fff;
  text-shadow: 0 0 3px #fff;
  font-size: 1.22rem;
}
.item-link:focus {
  color: #fff;
}

@media screen and (max-width: 700px) {
  .sidebar {
    position: relative;
    width: 100%;
    height: auto;
  }
  .sidebar-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 5px;
  }
  .list-item {
    padding: 20px;
  }
}
</style>
