// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/homePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/espace-game',
    name: 'app_espace-game',
    component: () => import('../views/espaceGame.vue')
  },
  {
    path: '/realite-virtuelle',
    name: 'app_realite-virtuelle',
    component: () => import('../views/realite_virtuelle.vue')
  },
  {
    path: '/jeux-video',
    name: 'app_jeux-video',
    component: () => import('../views/jeuxVideo.vue')
  },
  {
    path: '/jeux-societe',
    name: 'app_jeux-societe',
    component: () => import('../views/jeuxSociete.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
