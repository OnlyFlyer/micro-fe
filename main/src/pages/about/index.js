import React from 'react';
import { Link } from 'react-router-dom';

export default function about(props) {
  console.log('main-app about');
  return (
    <div>
      <h1>这是 main-app 的 about 页面</h1>
      <div>
        <Link to="/main/home">去 home</Link>
        <div style={{ marginTop: 10 }} />
        <Link to="/main/user">去 user</Link>
      </div>
    </div>
  );
};
