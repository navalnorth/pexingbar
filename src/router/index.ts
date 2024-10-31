// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/homePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
