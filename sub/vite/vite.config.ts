import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import * as path from 'path';
import qiankun from 'vite-plugin-qiankun';

import { name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react()
    qiankun('/vite', { useDevMode: true })
  ],
  // base: '/',
  preview: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  server: {
    port: 3001,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    target: 'esnext',
    lib: {
      name: `${name}-[name]`,
      entry: path.resolve(__dirname, "src/main.tsx"),
      formats: ['umd'],
    },
    rollupOptions: {
      // 在 vite 2.0 + 的版本中的 vite.config.ts ， 在 rollupOptions. preserveEntrySignatures 设置
      // 为 strict。 如果设置为 false 会无法正常工作。
      preserveEntrySignatures: 'strict',
      output: {
        // chunkFileNames: `webpackJsonp_${name}`,
        format: 'umd',
      },
    },
  },
  // esbuild: {},
})
