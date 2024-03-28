import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  console.log('main-app home');
  return (
    <div>
      <h1>这是 main-app 的 home 页面</h1>
      <div>
        <Link to="/main/about">去 about</Link>
        <div style={{ marginTop: 10 }} />
        <Link to="/main/user">去 user</Link>
      </div>
    </div>
  );
};
