import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // This will forward any requests starting with '/api' to your Laravel backend
      '/api': {
        target: 'http://localhost:8000', // Replace with your Laravel backend URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
      '/sanctum/csrf-cookie': {
        target: 'http://localhost:8000', // Replace with your Laravel backend URL
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
