import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs";

const CERTS_DIR = "/certs";

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(`${CERTS_DIR}/key.pem`),
      cert: fs.readFileSync(`${CERTS_DIR}/cert.pem`),
    },
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@image': '/src/assets/image/',
    }
  },
  build: {
    outDir: 'build'
  },
})