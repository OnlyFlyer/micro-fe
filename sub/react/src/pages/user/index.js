import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';

function getUserInfo(params, t = 1500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(params);
    }, t);
  });
};

const Page = () => {
  const [info, setInfo] = useState({ name: '--', age: '--', addr: '--', school : '--'});
  const [loading, setLoading] = useState(false);

  const init = async () => {
    setLoading(true);
    const _info = await getUserInfo({ name: '张三', age: 18, addr: '浙江杭州', school: '浙江大学' });
    setInfo(_info);
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  const userId = Math.floor(Math.random()*1e5);

  return (
    <Spin spinning={loading}>
      <h1>这是 react-app 的 user 页面</h1>
      <p>名称: {info.name}</p>
      <p>年龄: {info.age}</p>
      <p>地址: {info.addr}</p>
      <p>学校: {info.school}</p>
      <Link to={`/user/edit/${userId}`}>用户编辑</Link>
      <Link to="/home">去 home 页</Link>
      <Link to="/user">去 user 页</Link>
      <Link to="/a">去 a 页</Link>
      <Link to="/b">去 b 页</Link>
      <Link to="/c">去 c 页</Link>
    </Spin>
  );
};

export default Page;
