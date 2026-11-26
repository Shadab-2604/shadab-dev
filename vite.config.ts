import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for heavy libraries
          if (id.includes('three')) {
            return 'vendor-three';
          }
          if (id.includes('gsap')) {
            return 'vendor-gsap';
          }
          if (id.includes('lucide-react')) {
            return 'vendor-icons';
          }
          if (
            id.includes('react') ||
            id.includes('react-dom') ||
            id.includes('@headlessui') ||
            id.includes('emailjs')
          ) {
            return 'vendor-react';
          }
        },
      },
    },
  },
});
