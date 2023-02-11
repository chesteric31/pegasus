import {createApp} from 'vue'
import './style.css'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import App from './App.vue'

createApp(App).use(PrimeVue).component('Button', Button).mount('#app')
