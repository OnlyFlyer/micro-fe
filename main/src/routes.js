
import { createBrowserRouter } from 'react-router-dom';

import MainWrapper from './pages/main_wrapper';
import MicroRoot from './pages/micro_root';
import About from './pages/about';
import Home from './pages/home';
import User from './pages/user';

export const objectRoutes = createBrowserRouter([
  {
    path: '/main',
    Component: MainWrapper,
    children: [
      {
        path: 'home',
        Component: Home,
      },
      {
        path: 'user',
        Component: User,
      },
      {
        path: 'about',
        Component: About,
      },
        // 给其他qiankun子应用页面使用的路由
      {
        path: '*',
        component: MicroRoot,
      },
    ],
  },
]);
