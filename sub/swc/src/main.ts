import './public-path.js';
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

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: boolean;
  }
}

let instance: any = null;
let router: any = null;
function render(props: any) {
  const { container } = props;
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/swc' : '/'),
    routes,
  });
  instance = createApp(App).use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// const app = createApp(App);

// app.use(router);

// app.mount('#app').

export async function bootstrap() {
  console.log('=======swc-vue-app bootstrap=======');
  console.log('swc-vue-app bootstraped');
  console.log('=======swc-vue-app bootstrap=======');
}

export async function mount(props: any) {
  console.log('=======swc-vue-app mount=======');
  console.log('swc-vue-app mount', props);
  console.log('=======swc-vue-app mount=======');
  render(props);
}

export async function unmount() {
  console.log('=======swc-vue-app unmount=======');
  instance.unmount();
  // instance.$destroy();
  // instance.$el.innerHTML = '';
  instance = null;
  router = null;
  console.log('=======swc-vue-app unmount=======');
}
