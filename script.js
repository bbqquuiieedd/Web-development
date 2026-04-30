document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('scrollTopButton');
    const threshold = 300; // Кнопка появится после прокрутки в заданное количество px

    window.addEventListener('scroll', () => {
        if (window.scrollY > threshold) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
