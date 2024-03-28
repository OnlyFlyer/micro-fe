import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, AccountBookOutlined, CalculatorOutlined, EditOutlined } from '@ant-design/icons';

import PageA from './pages/a';
import PageB from './pages/b';
import PageC from './pages/c';
import Home from './pages/home';
import User from './pages/user';
import UserEdit from './pages/user_edit';
import UserList from './pages/user_list';
import NotFound from './pages/404';

const { Content, Sider } = Layout;

// 左侧菜单
const menus = [
  {
    key: 'home',
    icon: React.createElement(EditOutlined),
    label: 'home'
  },
  {
    key: 'user/list',
    icon: React.createElement(CalculatorOutlined),
    label: 'user list'
  },
  {
    key: 'user',
    icon: React.createElement(CalculatorOutlined),
    label: 'user'
  },
  {
    key: 'a',
    icon: React.createElement(NotificationOutlined),
    label: 'a'
  },
  {
    key: 'b',
    icon: React.createElement(LaptopOutlined),
    label: 'b'
  },
  {
    key: 'c',
    icon: React.createElement(UserOutlined),
    label: 'c'
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
  <Layout>
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
        <Route path='user/list' element={<UserList />} />
        <Route path='user/edit/:userId' element={<UserEdit />} />
        <Route path='a' element={<PageA />} />
        <Route path='b' element={<PageB />} />
        <Route path='c' element={<PageC />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Content>
  </Layout>
  );
}

export default App;
