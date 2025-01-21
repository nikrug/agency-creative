export function initHeader() {
    // Получаем элементы
            const modal = document.querySelector(".modal");
            const openButtons = document.querySelectorAll(".click-open-modal");
            const closeButton = document.querySelectorAll(".modal__close");
    
    
            // Открываем модальное окно при нажатии на кнопку
            openButtons.forEach(button => {
                button.addEventListener("click", () => {
                    modal.classList.add("modal__show-modal"); // Добавляем класс, чтобы показать модал
                });
            });
    
            closeButton.forEach(button=> {
                button.addEventListener("click",()=>{
                 modal.classList.remove("modal__show-modal");
                })
            })
            window.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.classList.remove("modal__show-modal"); // Убираем класс, чтобы скрыть модал
                }
            });
    
            const dropdown = document.querySelector(".dropdown-content");
            const dropdownButtons = document.querySelectorAll('.open-dropdown');
            const closeButtons = document.querySelector(".dropdown-button");
            const menuShow = document.querySelector('.menu')
    
        dropdownButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Если меню уже открыто
                if (menuShow.classList.contains("show-menu")) {
                    closeButtons.classList.remove("dropdown-button-close");
                    menuShow.classList.remove("show-menu");
                    dropdown.classList.remove("show-dropdown"); // Закрываем выпадающее меню
                } else {
                    closeButtons.classList.add("dropdown-button-close");
                    menuShow.classList.add("show-menu");
                    dropdown.classList.add("show-dropdown"); // Показываем выпадающее меню
                }
            });
        });
    
       let styleMode = localStorage.getItem('styleMode');
       const styleToggle = document.querySelector('.header__button-start')
    
       const enableDarkStyle = () => {
        document.body.classList.add('darkstyle');
        localStorage.setItem('styleMode','dark')
       }

       const disableDarkStyle = () => {
        document.body.classList.remove('darkstyle');
        localStorage.setItem('styleMode',null);
       }

       styleToggle.addEventListener('click',() => {
        styleMode = localStorage.getItem('styleMode');
        if(styleMode !== 'dark'){
            enableDarkStyle();
        }else{
            disableDarkStyle();
        }
       });

       if (styleMode === 'dark'){
        enableDarkStyle();
       }

       const container = document.querySelector('.balloon-container');
const balloonCount = 4; // Количество шариков, которые нужно создать
const balloons = [];

// Функция для создания шарика
function createBalloon(index) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    // Устанавливаем цвет шарика: красный для первой половины и синий для второй
    if (index < balloonCount / 2) {
        balloon.style.background = 'linear-gradient(180deg, rgba(68, 133, 255, 0.8) 0%, #377DFF 100%)';
    } else {
        balloon.style.background = 'linear-gradient(180deg, #FF8E8E 0%, #F62424 100%)';
    }
    // Задаем фиксированные начальные позиции для шариков
    const startX = (index % 3) * 200 + 50; // Располагаем шарики в ряд
    const startY = Math.floor(index / 3) * 100 + 50; // Два ряда шариков
    balloon.style.left = `${startX}px`;
    balloon.style.top = `${startY}px`;

    // Добавляем шарик в контейнер
    container.appendChild(balloon);
    const velocityX = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 1 + 1);
    const velocityY = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 1 + 1);
    balloons.push({ balloon, velocityX, velocityY });
    
    // Запускаем анимацию
    moveBalloon(balloons[balloons.length - 1]);
}



// Функция для инициализации шариков
function initBalloon(balloonObj) {
    moveBalloon(balloonObj);
}

// Функция для движения шариков
function moveBalloon(balloonObj) {
    let { balloon, velocityX, velocityY } = balloonObj;
    let posX = parseFloat(balloon.style.left);
    let posY = parseFloat(balloon.style.top);
  
    function animate() {
        posX += velocityX;
        posY += velocityY;

        const containerHeight = container.clientHeight; // Получите высоту контейнера
        const containerWidth = container.clientWidth; // Получите ширину контейнера
        const balloonWidth = 30; // Ширина шарика
        const balloonHeight = 30; // Высота шарика

        // Проверка столкновений с границами контейнера
        if (posX + balloonWidth > containerWidth || posX < 0) {
            velocityX *= -1; // Изменение направления по оси X
            posX = Math.max(0, posX); // Убедитесь, что не выйдем за левую границу
            posX = Math.min(containerWidth - balloonWidth, posX); // Убедитесь, что не выйдем за правую границу
        }

        // Проверяем, не вышел ли шарик за пределы контейнера по высоте
        if (posY + balloonHeight > containerHeight || posY < 0) {
            velocityY *= -1; // Изменение направления по оси Y
            posY = Math.max(0, posY); // Убедитесь, что не выйдем за верхнюю границу
            posY = Math.min(containerHeight - balloonHeight, posY); // Убедитесь, что не выйдем за нижнюю границу
        }

        // Обновляем позицию шарика
        balloon.style.left = `${posX}px`;
        balloon.style.top = `${posY}px`;

        requestAnimationFrame(animate); // Рекурсивный вызов для анимации
    }

    animate();
}

// Обработчик события изменения размера


// Создаем фиксированное количество шариков
for (let i = 0; i < balloonCount; i++) {
    createBalloon(i);
}
    }

    
    
            