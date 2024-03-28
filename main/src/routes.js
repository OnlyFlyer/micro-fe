import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, AccountBookOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';

import MicroRoot from './pages/micro_root';
import About from './pages/about';
import Home from './pages/home';
import User from './pages/user';
import logo from './logo.svg';

const { Header, Content, Sider } = Layout;

const items1 = ['首页', '关于我们', '加入我们'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


// 左侧菜单
const menus = [
  {
    key: 'main',
    icon: React.createElement(UserOutlined),
    label: '主应用',
    children: [
      {
        key: '/main/home',
        label: 'home',
      },
      {
        key: '/main/about',
        label: 'about',
      },
      {
        key: '/main/user',
        label: 'user',
      },
    ],
  },
  {
    key: '/main/react',
    icon: React.createElement(LaptopOutlined),
    label: '子应用-react'
  },
  {
    key: '/main/vite',
    icon: React.createElement(NotificationOutlined),
    label: '子应用-vite'
  },
  {
    key: '/main/swc',
    icon: React.createElement(AccountBookOutlined),
    label: '子应用-swc'
  },
];

function Wrapper(props) {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  return (
    <Layout style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} className="demo-logo" alt="logo" style={{ width: 60 }} />
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: '#fff'
            }}
          />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout style={{ flex: 1 }}>
        <Sider
          width={200}
          style={{ background: colorBgContainer, marginBottom: 24, height: 'calc(100vh - 64px)' }}
          collapsible
          trigger={null}
          collapsed={collapsed}
        >
          <Menu
            mode="inline"
            // defaultSelectedKeys={['main']}
            defaultOpenKeys={['main']}
            style={{ height: '100%', borderRight: 0 }}
            items={menus}
            onClick={({ key }) => {
              navigate(key);
            }}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            id='main-root'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflow: 'auto'
            }}
          >
            Content
            <div id="vite-root" />
            <div id="swc-root" />
            <div id="react-root" />
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export const objectRoutes = createBrowserRouter([
  {
    path: '/main',
    Component: Wrapper,
    children: [
      {
        path: 'home',
        Component: Home,
      },
      {
        path: 'user',
        Component: User,
      },
      {
        path: 'about',
        Component: About,
      },
        // 给其他qiankun子应用页面使用的路由
      {
        path: '*',
        component: MicroRoot,
      },
    ],
  },
]);
