import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/components/auth/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/components/auth/Register.vue'),
    },
    {
        path: '/task',
        name: 'list',
        component: () => import('@/components/tasks/List.vue'),
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router