import MicroRoot from './pages/micro_root';
import About from './pages/about';
import Home from './pages/home';
import User from './pages/user';
import { createBrowserRouter } from 'react-router-dom';

function Wrapper(props) {
  console.log(props, '--888');
  return (
    <div>
      <h1>wrapper</h1>
      {props.children}
    </div>
  );
};

export const objectRoutes = createBrowserRouter([
  {
    path: '/',
    // Component: Wrapper,
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
    ],
  },
  // 给其他qiankun子应用页面使用的路由
  {
    path: '*',
    component: MicroRoot,
  },
]);

export const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
    redirect: "/home",
    meta: { base: true },
    children: [
      {
        path: 'home',
        component: Home,
        meta: { base: true },
      },
      {
        path: 'user',
        component: User,
        meta: { base: true },
      },
      {
        path: 'about',
        component: About,
        meta: { base: true },
      }
    ],
  },
  // 给其他qiankun子应用页面使用的路由
  {
    path: '*',
    component: MicroRoot,
  },
];
