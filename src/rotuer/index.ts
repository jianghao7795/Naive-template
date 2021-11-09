import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home.vue';
import About from '@/views/about.vue';
import BackendLayout from '@/layout/BackendLayout.vue';
import Login from '@/views/login/login.vue';

const routers: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'yield',
    redirect: '/login',
  },
  {
    path: '/todo',
    name: 'todo',
    meta: {
      index: 1,
    },
    component: () => import('@/views/todo/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      index: 2,
    },
  },
  {
    path: '/backend',
    name: 'Backend',
    component: () => import('@/layout/BasieLayout.vue'),
    meta: {
      // transition: 'aside-right', // 不需要缓存
      index: 20,
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          index: 21,
        },
      },
      {
        path: 'about',
        name: 'About',
        component: About,
        meta: {
          index: 22,
        },
      },
    ],
    // meta: { transition: 'aside-right' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from, next) => {
  // console.log(to, from, next); 跳转处理
  next();
});

export default router;
