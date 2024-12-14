import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: "Home", component: Home},
        {path: '/brazil', name: "Brazil", component: () => import('./views/Brazil.vue')},
        {path: '/panama', name: "Panama", component: () => import('./views/Panama.vue')},
        {path: '/hawaii', name: "Hawaii", component: () => import('./views/Hawaii.vue')},
        {path: '/jamaica', name: "Jamaica", component: () => import('./views/Jamaica.vue')}
    ],
});

createApp(App).use(router).mount('#app')
