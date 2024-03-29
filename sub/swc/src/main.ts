import './public-path.js';
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import { createRouter, createWebHistory } from 'vue-router';
import { qiankunWindow, renderWithQiankun } from "vite-plugin-qiankun/es/helper";

import App from './App.vue'
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
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/main/swc' : '/'),
    routes,
  });
  instance = createApp(App).use(router).use(Antd);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

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

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: Record<string, string>) {
  console.log('=======swc-app update=======');
  console.log('update props', props);
  console.log('=======swc-app update=======');
}


// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
} else {
  // 作为子应用运行
  renderWithQiankun({
    //生命周期函数
     mount,
     bootstrap,
     update,
     unmount,
   });
}
