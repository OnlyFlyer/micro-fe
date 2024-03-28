import React from 'react';
import { Link } from 'react-router-dom';

export default function about(props) {
  console.log('main-app about');
  return (
    <div>
      <h1>这是 main-app 的 about 页面</h1>
      <div>
        <Link to="/home">去 home</Link>
      </div>
    </div>
  );
};
