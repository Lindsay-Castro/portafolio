document.addEventListener('DOMContentLoaded', () => {
    const botonMenu = document.getElementById('boton-menu');
    const menu = document.getElementById('menu');

    if (botonMenu && menu) {
        botonMenu.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});