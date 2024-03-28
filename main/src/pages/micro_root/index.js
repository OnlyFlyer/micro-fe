import React, { useEffect } from 'react';

import start from '../../qiankun';

export default function Home(props) {
  console.log('main-app micro-root page');
  useEffect(() => {
    // 启动微前端
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  }, []);
  return (
    <div>
      <h1>这是 main-app 的 home 页面</h1>
      <div id="main" />
    </div>
  );
};
