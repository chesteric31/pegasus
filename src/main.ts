import {createApp} from 'vue'
import './style.css'

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'
import router from './router/index';


createApp(App).use(router).mount('#app')
