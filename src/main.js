import './styles/header.scss';
import './styles/reset.scss';
import './styles/about.scss';
import './styles/servises.scss';
import './styles/portfolio.scss';
import './styles/testimonials.scss';
import './styles/footer.scss';
import './styles/fonts.scss';
import { initHeader } from './header.js'; 

document.addEventListener("DOMContentLoaded", async () => {
    const includeElements = document.querySelectorAll("include");
    
    for (const el of includeElements) {
        const src = el.getAttribute("src");
        const response = await fetch(src);
        const content = await response.text();
        el.outerHTML = content; // Заменяет элемент include на загруженное содержимое 
    }

    initHeader(); // Инициализация после того, как весь контент загружен и добавлен в DOM
});


const welcomeScreen = document.getElementById('welcomeScreen');

// Убираем приветственный экран через 5 секунд
setTimeout(() => {
    welcomeScreen.classList.add('fadeOut'); // Добавляем класс для анимации исчезновения
    // Удаляем элемент после завершения анимации
    setTimeout(() => {
        welcomeScreen.style.display = 'none'; // Скрыть приветственный экран
    }, 8000); // Длительность анимации исчезновения
}, 9000); 

 
