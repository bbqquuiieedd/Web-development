document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('buttonScrollToTop');
    if (!button) return;
    
    window.addEventListener('scroll', () => 
        button.classList.toggle('show', window.scrollY > 0)
    );
    
    button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
});