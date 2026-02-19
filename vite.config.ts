import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        terminos: './terminos.html',
        privacidad: './privacidad.html'
      }
    }
  }
})
