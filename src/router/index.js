import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'list',
        component: () => import('@/components/tasks/List.vue'),
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router