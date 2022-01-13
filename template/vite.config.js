import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: {
      // NOTE: CodeSandboxが3000を443へport proxyするため
      port: 443
    }
  }
})
