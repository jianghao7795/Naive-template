import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routers: RouteRecordRaw[] = [
  {
    path: '/slot',
    name: 'slot',
    meta: {
      title: 'slot',
    },
    component: () => import('@/views/slot/parent.vue'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'home',
    },
    component: () => import('@/views/homeDemo/HomeComponent.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: 'Demo',
    },
    component: () => import('@/views/homeDemo/demo.vue'),
  },
  {
    path: '/',
    name: 'yield',
    redirect: '/user/login',
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/layout/LoginLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
        meta: {
          index: 2,
        },
      },
    ],
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
        component: () => import('@/views/home.vue'),
        meta: {
          index: 21,
        },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about.vue'),
        meta: {
          index: 22,
        },
      },
      {
        path: 'todo',
        name: 'todo',
        meta: {
          index: 23,
        },
        component: () => import('@/views/todo/index.vue'),
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
  // console.log(to, from, next);
  // 跳转处理;
  if (to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = 'Vite';
  }
  next();
});

export default router;
