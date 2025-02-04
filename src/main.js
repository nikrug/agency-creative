import './styles/header.scss';
import './styles/reset.scss';
import './styles/about.scss';
import './styles/servises.scss';
import './styles/portfolio.scss';
import './styles/testimonials.scss';
import './styles/footer.scss';
import './styles/fonts.scss';
import './styles/animations.scss';
import { initHeader } from './js/header.js'; 
import  {initLang}  from './js/lang.js';
import { initAnimation } from './js/animation.js';

document.addEventListener("DOMContentLoaded", async () => {
    
    const includeElements = document.querySelectorAll("include");
    
    for (const el of includeElements) {
        const src = el.getAttribute("src");
        const response = await fetch(src);
        const content = await response.text();
        el.outerHTML = content; // Заменяет элемент include на загруженное содержимое 
    }
    initAnimation();
    initLang();
    initHeader(); // Инициализация после того, как весь контент загружен и добавлен в DOM
  
    

});



 
