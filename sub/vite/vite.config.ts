import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { name } from './package.json';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: `webpackJsonp_${name}`,
    //     format: 'umd',
    //   },
    // },
  },
  // esbuild: {},
})
