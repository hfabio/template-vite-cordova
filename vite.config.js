/* eslint-disable no-undef */
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

const cordovaPlugin = () => ({
  name: 'build-html',
  apply: 'build',
  transformIndexHtml: (html) => {
    return {
      html,
      tags: [
        {
          tag: 'script',
          attrs: {
            src: 'cordova.js',
          },
          injectTo: 'body',
        },
      ],
    };
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  envPrefix: 'ENV_',
  plugins: [react(), jsconfigPaths(), cordovaPlugin()],
  server: {
    port: 3000,
    watch: {
      ignored: ['node_modules', 'platforms'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      components: `${path.resolve(__dirname, 'src/components/')}`,
      public: `${path.resolve(__dirname, 'public/')}`,
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'www'),
    rollupOptions: {
      output: {
        paths: path.resolve(__dirname, 'www'),
      },
      // external: 'cordova.js'
    },
  },
});
