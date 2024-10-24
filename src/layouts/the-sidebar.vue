<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'SidebarMenu',
  setup() {
    const { locale } = useI18n()

    const currentLang = locale.value

    const changeLang = (lang) => {
      locale.value = lang
    }
    return {
      currentLang,
      changeLang
    }
  }
}
</script>

<template>
  <div class="sidebar">
    <ul class="sidebar-list">
      <li class="list-item">
        <router-link to="/" class="item-link">{{ $t('sidebar.home') }}</router-link>
      </li>
      <li class="list-item">
        <router-link to="/groups" class="item-link">{{ $t('sidebar.groups') }}</router-link>
      </li>
      <li class="list-item">
        <router-link to="/register-payment" class="item-link">{{ $t('sidebar.registerPayment') }}</router-link>
      </li>
      <li class="list-item">
        <router-link to="/edit-payment" class="item-link">{{ $t('sidebar.editPayment') }}</router-link>
      </li>
      <li class="list-item">
        <router-link to="/transactions" class="item-link">{{ $t('sidebar.transactions') }}</router-link>
      </li>
      <li class="list-item">
        <router-link to="/contacts" class="item-link">{{ $t('sidebar.contacts') }}</router-link>
      </li>
    </ul>
    <div class="bottom-section">
      <pv-button
        label="En"
        class="switch"
        @click="changeLang('en')"
        aria-label="Switch language to English"
        aria-description="Click this button to change the language to English"
      />
      <pv-button
        label="Es"
        class="switch"
        @click="changeLang('es')"
        aria-label="Switch language to Spanish"
        aria-description="Click this button to change the language to Spanish"
      />
    </div>
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
  padding: 0 10px;
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
  margin: 2rem 0;
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

.switch {
  position: relative;
  bottom: -100px;
  font-weight: bold;
  border: 1px solid #333;
  background-color: #48e;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
</style>
