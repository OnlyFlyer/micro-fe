import { Layout, Menu, theme, Button } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, AccountBookOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import logo from '../../logo.svg';

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
        key: '/home',
        label: 'home',
      },
      {
        key: '/about',
        label: 'about',
      },
      {
        key: '/user',
        label: 'user',
      },
    ],
  },
  {
    key: '/react',
    icon: React.createElement(LaptopOutlined),
    label: '子应用-react'
  },
  {
    key: '/vite',
    icon: React.createElement(NotificationOutlined),
    label: '子应用-vite'
  },
  {
    key: '/swc',
    icon: React.createElement(AccountBookOutlined),
    label: '子应用-swc'
  },
];

export default function Page() {
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
        <Layout style={{ borderLeft: '1px solid #eee' }}>
          <Content
            id='main-root'
            style={{
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflow: 'auto'
            }}
          >
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
