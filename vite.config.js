import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output goes to the correct directory
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensures `.jsx` files are properly resolved
  },
});
