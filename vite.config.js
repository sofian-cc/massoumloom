import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React from app code — React rarely changes so it stays cached
          // even when app code updates
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
