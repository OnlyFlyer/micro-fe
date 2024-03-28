import { registerMicroApps, start } from 'qiankun'; // loadMicroApp

// const store = {
//   name: '张三',
//   age: 18
// };

registerMicroApps([
  // {
  //   name: 'sub-app',
  //   entry: '//localhost:2001',
  //   container: '#main',
  //   activeRule: '/sub-app',
  //   props: { store },
  // },
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
], {
  beforeLoad: (app) => {
    console.log("before load+++++++++++", app.name);
    return Promise.resolve();
  },
  beforeMount: (app) => {
    console.log("before mount----------", app.name);
    return Promise.resolve();
  },
  afterMount: (app) => {
    console.log("after mount============", app.name);
    return Promise.resolve();
  },
  afterUnmount: (app) => {
    console.log("after unmount===+++++----", app.name);
    return Promise.resolve();
  },
});

export default start;
// start();
