import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Proxy dipakai saat development agar request ke API tidak terblokir CORS.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': { target: 'http://cool.uruz.id', changeOrigin: true },
    },
  },
});
