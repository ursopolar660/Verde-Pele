// Seleciona o botão de hambúrguer e o menu
const menuButton = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu-list');

// Define a função toggleMenu
function toggleMenu() {
    // Alterna a classe 'active' no menu
    menu.classList.toggle('active');
}

// Adiciona um evento de clique ao botão de hambúrguer
menuButton.addEventListener('click', toggleMenu);