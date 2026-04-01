document.addEventListener("scroll", () => {
    const navbarBtns = document.querySelectorAll('.btn');
    const themedSections = document.querySelectorAll('[nav-theme]');
    const navHeight = 40;

    var activeNavTheme = 'light';

    themedSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom > navHeight) {
            activeNavTheme = section.getAttribute('nav-theme');
        }
    });

    navbarBtns.forEach(btn => {
        if (activeNavTheme === 'dark') {
            btn.classList.add('btn-dark');
        } else {
            btn.classList.remove('btn-dark');
        }
    });

},
{
    passive: true
});