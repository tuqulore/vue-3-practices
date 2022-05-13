import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  ...(process.env.CODESANDBOX === "true" && {
    server: {
      hmr: {
        port: 443
      }
    }
  })
})
