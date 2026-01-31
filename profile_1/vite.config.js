import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.JPG', '**/*.JPEG'],
  // Base URL for GitHub Pages - automatically set by GitHub Actions
  // For local development, this will be '/'
  // For GitHub Pages, it will be '/your-repo-name/'
  base: process.env.BASE_URL || '/',
})
