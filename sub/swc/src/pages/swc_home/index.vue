<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <h1>这是 swc-app 的 home 页面</h1>
        <RouterLink to="/user">去 user 页</RouterLink>
        <RouterLink to="/ddd">去 ddd 页</RouterLink>
        <RouterLink to="/about">去 about 页</RouterLink>
    </div>
</template>
