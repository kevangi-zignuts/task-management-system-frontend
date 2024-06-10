import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/components/auth/Login.vue'),
        meta: {
            showNavbar: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/components/auth/Register.vue'),
        meta: {
            showNavbar: false
        }
    },
    {
        path: '/forgot-password',
        name: 'forgotPassword',
        component: () => import('@/components/auth/ForgotPassword.vue'),
        meta: {
            showNavbar: false
        }
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: () => import('@/components/auth/ResetPassword.vue'),
        meta: {
            showNavbar: false
        }
    },
    {
        path: '/task',
        name: 'list',
        component: () => import('@/components/tasks/List.vue'),
        meta: {
            showNavbar: true
        }
    },
    {
        path: '/task/create',
        name: 'create',
        component: () => import('@/components/tasks/Create.vue'),
        meta: {
            showNavbar: true
        }
    },
    {
        path: '/task/view/:id(\\d+)',
        name: 'view',
        component: () => import('@/components/tasks/View.vue'),
        meta: {
            showNavbar: true
        }
    },
    {
        path: '/task/edit/:id(\\d+)',
        name: 'edit',
        component: () => import('@/components/tasks/Edit.vue'),
        meta: {
            showNavbar: true
        }
    },
    // 404 Page not found
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/PageNotFound.vue'),
        meta: {
            showNavbar: false
        }
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router