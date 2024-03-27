import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/404/index.vue';
import DDD from './pages/swc_ddd/index.vue';
import Home from './pages/swc_home/index.vue';
import User from './pages/swc_user/index.vue';
import About from './pages/swc_about/index.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/ddd', component: DDD },
  { path: '/404', component: NotFound },
  { path: '/user', component: User },
]

const router = createRouter({
  history: createWebHistory('/swc'),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app')
