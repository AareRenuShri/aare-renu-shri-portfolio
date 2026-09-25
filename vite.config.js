import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Site is served from a GitHub Pages subpath (/aare-renu-shri-portfolio/)
  base: '/aare-renu-shri-portfolio/',
  plugins: [react()],
});
