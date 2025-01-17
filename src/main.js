import './styles/reset.scss';
import './styles/header.scss';
import './styles/fonts.scss';
import { initHeader } from './header.js'; 

document.addEventListener("DOMContentLoaded", () => {
  const include = document.querySelectorAll("include");
  include.forEach(async (el) => {
      const src = el.getAttribute("src");
      const response = await fetch(src);
      const content = await response.text();
      el.outerHTML = content; 
      initHeader(); 

  });

  const includes = document.querySelectorAll('.include');

  includes.forEach(include => {
    const src = include.getAttribute('data-src');
    fetch(src)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при загрузке: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            include.innerHTML = html; // Вставляем загруженный HTML
       
            initHeader();
        })
        .catch(error => {
            console.error('Ошибка загрузки:', error);
        });
  });
});

// Инициализация заголовка и музыки
initHeader(); 
 
