document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o Menu Hamburguer (Mobile)
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Lógica para o Carrossel
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselDotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Cria os pontos de navegação do carrossel
    carouselItems.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        carouselDotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active');
            dots[index].classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
                dots[index].classList.add('active');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    window.changeSlide = function(n) {
        currentIndex += n;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0;
        }
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1;
        }
        updateCarousel();
    }

    // Autoplay do carrossel (opcional)
    setInterval(() => {
        changeSlide(1);
    }, 5000); // Muda de slide a cada 5 segundos
});