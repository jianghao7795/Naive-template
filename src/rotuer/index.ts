import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import About from '../views/about.vue';

const routers = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true, // 不需要缓存
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      keepAlive: true, // 不需要缓存
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
