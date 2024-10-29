import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import i18n from '@/translate/i18n.js'
import setupPrimeVue from './primevue-components'

const app = createApp(App)

setupPrimeVue(app)

app.use(router)
app.use(i18n)

app.mount('#app');
