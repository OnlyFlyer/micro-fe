import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
  return <div>
    <h1>这是 react-app 的 404 页面</h1>
    <Link to="/home">去 home 页</Link>
  </div>
};

export default Page;
