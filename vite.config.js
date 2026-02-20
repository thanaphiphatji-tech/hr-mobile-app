import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/hr-mobile-app/',   // 👈 สำคัญมากสำหรับ GitHub Pages

  server: {
    port: 5173,
    proxy: {
      '/gas': {
        target: 'https://script.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(
            /^\/gas/,
            '/macros/s/AKfycby1YzD0g7VJq-NPMfulSu6re6Ikwh7HeU3uwl_OAIWXCadHvtAzT8oork-KJbwCdFvKmA/exec'
          )
      }
    }
  }
})
