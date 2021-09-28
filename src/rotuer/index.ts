import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue';
import About from '@/views/about.vue';

const routers = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
];

const router = createRouter({
	history: createWebHistory(),
	routes: routers,
});

export default router;
