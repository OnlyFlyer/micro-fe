import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
  return <div>
    <h1>这是 react-app 的 b 页面</h1>
    <Link to="/home">去 home 页</Link>
    <Link to="/user">去 user 页</Link>
    <Link to="/a">去 a 页</Link>
    <Link to="/b">去 b 页</Link>
    <Link to="/c">去 c 页</Link>
  </div>
};

export default Page;
