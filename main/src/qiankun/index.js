import { registerMicroApps, start } from 'qiankun'; // loadMicroApp

const info = {
  name: '主应用 - react',
  addr: '浙江杭州',
};

registerMicroApps([
  {
    name: 'vite',
    entry: '//localhost:3001',
    container: '#vite-root',
    activeRule: '/main/vite',
    props: { info, current: 'vite' },
  },
  {
    name: 'swc',
    entry: '//localhost:4001',
    container: '#swc-root',
    activeRule: '/main/swc',
    props: { info, current: 'swc' },
  },
  {
    name: 'react-app',
    entry: '//localhost:5001',
    container: '#react-root',
    activeRule: '/main/react',
    props: { info, current: 'react' },
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
