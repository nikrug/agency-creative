import { defineConfig } from 'vite';


export default defineConfig({
  root: 'src',


  server: {
    port: 3000, // Порт для разработки
    open: true, // Автоматически открывает браузер
    hot: true, // Включает горячую перезагрузку
  },
});