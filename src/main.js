import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import setupPrimeVue from '@/primevue-components.js'

const app = createApp(App)

setupPrimeVue(app)

app.use(router)

app.use(store)

app.mount('#app')
