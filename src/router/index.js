import {createRouter, createWebHistory} from 'vue-router'
import Home from "../components/Home.vue";
import Form from "../components/Form.vue";
import About from "../components/About.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/form',
        name: 'Form',
        component: Form,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
