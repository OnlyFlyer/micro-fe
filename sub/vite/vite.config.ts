import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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

    },
    // ss
  },
  // esbuild: {},
})
