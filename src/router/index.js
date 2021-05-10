import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/money',
    },
    {
      path: '/money',
      component: () => import('@/views/Money.vue'),
    },
    {
      path: '/chart',
      component: () => import('@/views/Chart.vue'),
    },
    {
      path: '/setting',
      component: () => import('@/views/Setting.vue'),
    },
    {
      name: 'addRecord',
      path: '/money/add',
      component: () => import('@/views/AddRecord.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
