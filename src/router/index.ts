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
  {
    path: '/bar',
    name: 'bar',
    component: () => import('../views/bar.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 };
  }
});

export default router;
