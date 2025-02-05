import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure the output directory is set correctly
    rollupOptions: {
      input: './index.html', // Ensure Vite knows the entry point
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensures `.jsx` files are properly resolved
  },
});
