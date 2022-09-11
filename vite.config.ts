import { defineConfig } from 'vite'

export default defineConfig({
  base: '/itowns-starter/',
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  define: {
    'window.global': {},
  },
})