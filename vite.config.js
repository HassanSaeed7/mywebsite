const { resolve } = require('path')
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'gallery/index.html')
      }
    }
  }
})