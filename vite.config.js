import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'src',

  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        header: './src/pages/header.html',
        about: './src/pages/about.html',
        sevices: './src/pages/sevises.html',
        portfolio: './src/pages/portfolio.html',
        testimonials: './src/pages/testimonials.html',
        footer: './src/pages/footer.html',
      },
    },
  },
  plugins: [
    createHtmlPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: './assets', // Укажите вашу папку с изображениями
          dest: 'assets', // Папка назначения в папке dist
        },
      ],
    }),
  ],
  server: {
    open: true, // Автоматически открывает браузер

  },
});