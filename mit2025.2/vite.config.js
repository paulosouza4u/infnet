import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Permite acesso externo
    port: 5173, // Define a porta correta
  },
  plugins: [react()],
})
