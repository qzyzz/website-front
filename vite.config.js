import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        javascriptEnabled: true,
        additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  },
})
