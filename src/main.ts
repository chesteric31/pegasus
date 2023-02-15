import {createApp} from 'vue'
import './style.css'

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'
import router from './router/index';
import Camera from "simple-vue-camera";

createApp(App).use(router).component("camera", Camera).mount('#app')
