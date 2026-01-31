import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.JPG', '**/*.JPEG'],
  // For GitHub Pages deployment:
  // - If deploying to username.github.io/repo-name/, set base to '/repo-name/'
  // - If deploying to username.github.io (user page), leave base as '/' (default)
  // Example: base: '/personal_web/',
})
