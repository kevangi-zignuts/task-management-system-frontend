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
        path: '/forgot-password',
        name: 'forgotPassword',
        component: () => import('@/components/auth/ForgotPassword.vue'),
    },
    {
        path: '/task',
        name: 'list',
        component: () => import('@/components/tasks/List.vue'),
    },
    {
        path: '/task/create',
        name: 'create',
        component: () => import('@/components/tasks/Create.vue'),
    },
    {
        path: '/task/view/:id(\\d+)',
        name: 'view',
        component: () => import('@/components/tasks/View.vue'),
    },
    {
        path: '/task/edit/:id(\\d+)',
        name: 'edit',
        component: () => import('@/components/tasks/Edit.vue'),
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: () => import('@/components/auth/ResetPassword.vue'),
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router