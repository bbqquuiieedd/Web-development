document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const sections = document.querySelectorAll('ol > li');
    const allItems = document.querySelectorAll('ul > li');
    
    if (!searchInput) return;
    
    // Функция поиска
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        // Если поиск пустой - показываем всё
        if (!query) {
            sections.forEach(section => {
                section.classList.remove('hidden');
            });
            allItems.forEach(item => {
                item.classList.remove('hidden');
            });
            return;
        }
        
        // Поиск по каждому элементу
        allItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const matches = text.includes(query);
            
            if (matches) {
                item.classList.remove('hidden');
                // Показываем родительский раздел
                const parentSection = item.closest('ol > li');
                if (parentSection) {
                    parentSection.classList.remove('hidden');
                }
            } else {
                item.classList.add('hidden');
            }
        });
        
        // Скрываем пустые разделы
        sections.forEach(section => {
            const visibleItems = section.querySelectorAll('ul > li:not(.hidden)');
            if (visibleItems.length === 0) {
                section.classList.add('hidden');
            }
        });
    }
    
    // Обработчик ввода
    searchInput.addEventListener('input', performSearch);
    
    // Очистка поиска по Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch();
            searchInput.blur();
        }
    });
    
    // Фокус на поиск по Ctrl+F
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
    });
});