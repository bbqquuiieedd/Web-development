document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('buttonSwitchTheme');
    if (!themeBtn) return;

    function createSvgIcon(type) {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", "2");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");
        if (type === 'sun') {
            const circle = document.createElementNS(svgNS, "circle");
            circle.setAttribute("cx", "12");
            circle.setAttribute("cy", "12");
            circle.setAttribute("r", "5");
            svg.appendChild(circle);
            const lines = [
                [12,1,12,3], [12,21,12,23], [4.22,4.22,5.64,5.64],
                [18.36,18.36,19.78,19.78], [1,12,3,12], [21,12,23,12],
                [4.22,19.78,5.64,18.36], [18.36,5.64,19.78,4.22]
            ];
            lines.forEach(coords => {
                const line = document.createElementNS(svgNS, "line");
                line.setAttribute("x1", coords[0]);
                line.setAttribute("y1", coords[1]);
                line.setAttribute("x2", coords[2]);
                line.setAttribute("y2", coords[3]);
                svg.appendChild(line);
            });
        } else {
            const path = document.createElementNS(svgNS, "path");
            path.setAttribute("d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z");
            svg.appendChild(path);
        }
        return svg;
    }

    function updateButtonIcon() {
        const isDark = document.body.classList.contains('themeDark');
        const iconType = isDark ? 'moon' : 'sun';
        themeBtn.innerHTML = '';
        themeBtn.appendChild(createSvgIcon(iconType));
    }

    // Применяем сохранённую тему
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('themeDark');
    } else {
        document.body.classList.remove('themeDark');
    }
    updateButtonIcon();

    // Обработчик клика – просто переключаем класс
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('themeDark');
        const isDarkNow = document.body.classList.contains('themeDark');
        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
        updateButtonIcon();
    });
});