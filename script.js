// Menú hamburguesa
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a'); // Selecciona todos los enlaces dentro de nav-links

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna la clase 'active' cuando se hace clic en el menú hamburguesa
});

// Cerrar el menú cuando se haga clic en un enlace
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Remueve la clase 'active' para cerrar el menú
    });
});

// Animaciones de la página
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-text');
    const moments = document.querySelector('.momentos');
    if (window.scrollY > 200) {
        hero.classList.add('fade-in');
    }
    if (window.scrollY > 600) {
        moments.classList.add('fade-in');
    }
});
