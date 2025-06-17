// Инициализация Swiper
document.addEventListener('DOMContentLoaded', () => {
    // Карусель товаров
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Плавный скролл для меню
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Кнопка "Наверх"
    const scrollBtn = document.querySelector('.scroll-up');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Валидация формы
    document.getElementById('feedback-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Заявка отправлена! (Это демо)');
        e.target.reset();
    });
});
