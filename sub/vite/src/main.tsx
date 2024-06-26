/* eslint-disable @typescript-eslint/no-explicit-any */
import './public-path';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

//引入qiankunWindow
import renderWithQiankun, { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('=======vite-react-app bootstraped=======');
}

let root: any = null;

function render(props: any) {
  const { container } = props;
  root = ReactDOM.createRoot(container ? container.querySelector('#viteRoot') : document.getElementById('viteRoot'))
  root.render(
    <BrowserRouter basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/main/vite' : ''}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
  )
}

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: boolean;
  }
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: Record<string, string>) {
  // ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
  console.log('=======vite-react-app mount=======');
  console.log('vite-react-app props', props);
  render(props);
  console.log('=======vite-react-app mount=======');
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: Record<string, string>) {
  // ReactDOM.unmountComponentAtNode(
  //   props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  // );
  console.log('=======vite-react-app unmount=======');
  console.log('unmount props', props);
  root.unmount();
  console.log('=======vite-react-app unmount=======');
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: Record<string, string>) {
  console.log('=======vite-react-app update=======');
  console.log('update props', props);
  console.log('=======vite-react-app update=======');
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
} else {
  // 注册生命周期函数
  renderWithQiankun({
    bootstrap,
    mount,
    unmount,
    update
  });
}
