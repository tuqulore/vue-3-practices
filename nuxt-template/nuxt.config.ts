import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ...(process.env.CODESANDBOX === "true" && {
    vite: {
      server: {
        hmr: {
          port: 443
        }
      }
    }
  })
})
