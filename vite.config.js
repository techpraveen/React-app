import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // Ensures correct path resolution for static hosting
  build: {
    outDir: 'dist', // Output directory
    assetsDir: 'assets', // Store static assets separately
    emptyOutDir: true, // Clear the folder before each build
  },
});
