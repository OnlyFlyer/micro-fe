import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import start from '../../qiankun';

export default function Home(props) {
  console.log('main-app home');
  return (
    <div>
      <h1>这是 main-app 的 home 页面</h1>
      <div>
        <Link to="/about">去 about</Link>
        {props.children}
      </div>
    </div>
  );
};
