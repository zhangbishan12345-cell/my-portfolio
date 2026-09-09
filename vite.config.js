import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';
export default defineConfig({base:'./',resolve:{alias:{'@':fileURLToPath(new URL('./src',import.meta.url))}},plugins:[react(),tailwindcss()],cacheDir:'.vite-cache',build:{rollupOptions:{output:{manualChunks(id){if(id.includes('/gsap/'))return 'animation';if(id.includes('/motion')||id.includes('/framer-motion/'))return 'motion';}}}}});
