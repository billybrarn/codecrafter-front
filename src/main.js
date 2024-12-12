import { createApp } from 'vue'
import './style.css'
import router from "./router";
import App from './App.vue'

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

createApp(App)
    .use(router)
    .use(ToastPlugin)
    .mount('#app')
