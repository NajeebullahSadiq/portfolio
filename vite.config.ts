import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',  // Set the base path for the deployment
  plugins: [react()],
});
