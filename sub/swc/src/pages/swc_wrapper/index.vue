<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterView } from 'vue-router'
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  const collapsed = ref<boolean>(false);

  const items = [
    {
      label: 'swc-home',
      key: 'home',
    },
    {
      label: 'swc-ddd',
      key: 'ddd',
    },
    {
      label: 'swc-about',
      key: 'about',
    },
    {
      label: 'swc-user',
      key: 'user',
    },
    {
      label: 'swc-404',
      key: '404',
    },
  ];

</script>

<template>
  <div>
    <a-layout>
      <a-layout-sider v-model="collapsed">
        <a-menu>
          <a-menu-item key="home">
            <UserOutlined />
            <span>swc-home</span>
          </a-menu-item>
          <a-menu-item key="user">
            <UserOutlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item>
            <VideoCameraOutlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
        <!-- zxc -->
      </a-layout-sider>
    </a-layout>
      <h1>swc-wrapper</h1>
      <RouterView />
  </div>
</template>
