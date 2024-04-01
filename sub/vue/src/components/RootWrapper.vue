<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterView, useRoute, useRouter } from "vue-router";
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
  } from '@ant-design/icons-vue';
  const router = useRouter();
  const collapsed = ref(false);
  const items = [
    { key: '/home', label: 'vue-Home' },
    { key: '/about', label: 'vue-About' },
    { key: '/goodsList', label: 'vue-GoodsList' },
    { key: '/goods/detail/19', label: 'vue-GoodsDetail' },
    { key: '/goods/edit/19', label: 'vue-GoodsEdit' },
  ];

  function handleMenuClick ({ key }: any) {
    router.push(key);

  };
</script>

<template>
  <a-layout style="flex-direction: row;width: 100vw;height: 100vh;">
    <a-layout-side v-model:collapsed="collapsed" style="background: #fff;">
      <a-menu @click="handleMenuClick">
        <a-menu-item v-for="item of items" :key="item.key">

          <HomeOutlined v-if="item.key === '/home'" />
          <UserOutlined v-else-if="item.key === '/about'" />
          <VideoCameraOutlined v-else-if="item.key === '/goodsList'" />
          <UploadOutlined v-else-if="item.key === '/goods/detail/19'" />
          <MenuUnfoldOutlined v-else />
          <span>{{item.label}}</span>
        </a-menu-item>
        <!-- <a-menu-item key="user">
          <UserOutlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item>
          <VideoCameraOutlined />
          <span>nav 3</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-side>
    <RouterView style="flex: 1;" />
    <!-- <slot></slot> -->
  </a-layout>
</template>
