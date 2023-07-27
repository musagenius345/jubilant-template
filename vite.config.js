// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@termux': path.resolve('/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules')
    }
  }
});

