import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { NotificationOutlined, AccountBookOutlined, CalculatorOutlined, EditOutlined } from '@ant-design/icons';

import Home from './pages/vite_home';
import User from './pages/vite_user';
import PageA from './pages/vite_a';
import NotFound from './pages/404/index';
import './index.css';

const { Content, Sider } = Layout;

// 左侧菜单
const menus = [
  {
    key: 'home',
    icon: React.createElement(EditOutlined),
    label: 'viteHome'
  },
  {
    key: 'user',
    icon: React.createElement(CalculatorOutlined),
    label: 'viteUser'
  },
  {
    key: 'a',
    icon: React.createElement(NotificationOutlined),
    label: 'viteA'
  },
  {
    key: '404',
    icon: React.createElement(AccountBookOutlined),
    label: '404'
  },
];

function App() {
  const navigate = useNavigate();
  return (
      <Layout style={{ width: '80vw' }}>
      <Sider>
        <Menu
            mode="inline"
            defaultSelectedKeys={['home']}
            // defaultOpenKeys={['main']}
            style={{ height: '100%', borderRight: 0 }}
            items={menus}
            onClick={({ key }) => {
              navigate(key);
            }}
          />
      </Sider>
      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='user' element={<User />} />
          <Route path='a' element={<PageA />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <h1>Vite</h1>
        <Link to="/home">去 home 页</Link>
        <Link to="/user">去 user 页</Link>
        <Link to="/a">去 a 页</Link>
        <Link to="/zxcasher">去 404 页</Link>
      </Content>
    </Layout>
  )
}

export default App
