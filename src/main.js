import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css'; // Importe o arquivo CSS global aqui

const app = createApp(App);

app.use(router);

app.mount('#app');
