import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  console.log('main-app user');
  return (
    <div>
      <h1>这是 main-app 的 user 页面</h1>
      <div>
        <Link to="/main/home">去 home</Link>
        <div style={{ marginTop: 10 }} />
        <Link to="/main/about">去 about</Link>
      </div>
    </div>
  );
};
