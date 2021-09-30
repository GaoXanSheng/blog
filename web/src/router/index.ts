import { createRouter, createWebHashHistory } from 'vue-router'
import main from '../view/main.vue'
import admin from '../view/admin.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: "main",
            path: '/main',
            component:main
        },
        {
            name: "main",
            path: '/',
            component:main
        },
        {
            name: "admin",
            path: '/admin',
            component:admin
        }
    ]
})
export default router