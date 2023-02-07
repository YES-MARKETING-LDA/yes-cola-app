import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/start'
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/start'
            },
            {
                path: 'start',
                component: () => import('@/views/StartPage.vue')
            },
            {
                path: 'products',
                component: () => import('@/views/ProductsPage.vue')
            },
            {
                path: 'product/:id',
                component: () => import('@/views/ProductPage.vue')
            },
            {
                path: 'news',
                component: () => import('@/views/NewsPage.vue')
            },
            {
                path: 'games',
                component: () => import('@/views/GamesPage.vue')
            },
        ]
    },
    {
        path: '/post/:id',
        component: () => import('@/views/PostPage.vue')
    },
    {
        path: '/game',
        component: () => import('@/views/GamePage.vue')
    },
    {
        path: '/playGame',
        component: () => import('@/views/PlayGame.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
