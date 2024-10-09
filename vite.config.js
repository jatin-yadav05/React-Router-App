import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React-Router-App/', // Ensure this is your GitHub repo name
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Makes sure static assets are correctly served
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    }
  },
  // Ensure local dev server works with React Router history mode
  server: {
    historyApiFallback: true
  }
})
