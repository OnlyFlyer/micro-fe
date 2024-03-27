import { registerMicroApps, start, loadMicroApp } from 'qiankun';

registerMicroApps([
  {
    name: 'vite',
    entry: '//localhost:3001',
    container: '#vite-root',
    activeRule: '/vite',
  },
  {
    name: 'swc',
    entry: '//localhost:4001',
    container: '#swc-root',
    activeRule: '/swc',
  },
  {
    name: 'react-app',
    entry: '//localhost:5001',
    container: '#react-root',
    activeRule: '/react',
  },
]);


start();
