import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    open: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), 
    },
  },
  build: {
    outDir: 'docs', // This changes the output folder to 'docs'
  },
})