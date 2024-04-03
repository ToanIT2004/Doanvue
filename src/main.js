import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import store Vuex vào đây
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.min.css';

const app = createApp(App);
app.use(router);
app.use(store); // Sử dụng store Vuex
app.mount('#app');
