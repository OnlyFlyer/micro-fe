import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import qiankun from 'vite-plugin-qiankun';
import { name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  server: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: `webpackJsonp_${name}`,
        format: 'umd',
      },
    },
  },
  // esbuild: {},
})
