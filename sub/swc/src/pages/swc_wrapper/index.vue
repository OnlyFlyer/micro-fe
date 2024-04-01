<script setup lang="ts">
import { ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";
const collapsed = ref<boolean>(false);

const router = useRouter();
const items = [
  {
    label: "swc-home",
    key: "/home",
  },
  {
    label: "swc-ddd",
    key: "/ddd",
  },
  {
    label: "swc-about",
    key: "/about",
  },
  {
    label: "swc-user",
    key: "/user",
  },
  {
    label: "swc-404",
    key: "404",
  },
];

function handleMenuClick ({ key }: any) {
  router.push(key);
};
</script>

<template>
  <div>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed">
        <a-menu @click="handleMenuClick">
          <a-menu-item v-for="item of items" :key="item.key">
            <HomeOutlined v-if="item.key === '/home'" />
            <UserOutlined v-else-if="item.key === '/ddd'" />
            <VideoCameraOutlined v-else-if="item.key === '/about'" />
            <UploadOutlined v-else-if="item.key === '/user'" />
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
      </a-layout-sider>
    </a-layout>
    <h1>swc-wrapper</h1>
    <RouterView />
  </div>
</template>
