// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('buttonScrollToTop');
    if (!button) return;
    
    // Показываем/скрываем кнопку при прокрутке
    window.addEventListener('scroll', () => {
        // Добавляем класс 'show', если прокрутка > 0
        button.classList.toggle('show', window.scrollY > 0);
    });
    
    // Плавная прокрутка к началу страницы при клике
    button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
});