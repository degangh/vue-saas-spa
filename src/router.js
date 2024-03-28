import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/Page/HomeView.vue';
import AboutView from '@/components/Page/AboutView.vue';
import LoginView from '@/components/Page/LoginView.vue';
import LoginLayout from '@/components/Shared/LoginLayout.vue';
import MainLayout from '@/components/Shared/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(), // Opt for history mode (cleaner URLs)
  routes: [
    {
        path: '/',
        component: MainLayout,
        children: [
          { path: '', component: HomeView },
          { path: 'about', component: AboutView },
          // Add more routes for other pages with the default layout
        ],
      },
      {
        path: '/login',
        component: LoginLayout,
        children: [
          { path: '', component: LoginView },
        ],
      },
    // Add more routes for other components here
  ],
});

export default router;
