import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '', // Empty string instead of './' or '/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return `assets/${assetInfo.name}-[hash][extname]`
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
      }
    },
    emptyOutDir: true // This will clean the dist folder before building
  }
})