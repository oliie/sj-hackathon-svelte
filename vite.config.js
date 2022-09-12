import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/v19/rest': {
        target: 'http://d12.api.sj.se',
        changeOrigin: true,
      },
      '/content/dam': {
        target: 'https://d12.www.sj.se/',
        changeOrigin: true,
      },
    },
  },
});
