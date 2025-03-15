// Script para Menu Hamburguer
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

// Inicialmente, o ícone do "X" deve estar oculto
closeIcon.style.display = 'none';

// Toggle para mostrar/ocultar o menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    
    // Alternar entre ícone de hamburguer e X
    if (menu.classList.contains('show')) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Script para fechar o menu ao clicar nas opções
const menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show'); // Fechar o menu após clicar no link
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});

const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('carousel-prev');
const nextButton = document.getElementById('carousel-next');

let index = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function goToSlide(n) {
    if (n < 0) {
        index = totalItems - 1;
    } else if (n >= totalItems) {
        index = 0;
    } else {
        index = n;
    }

    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Navegação manual
prevButton.addEventListener('click', () => goToSlide(index - 1));
nextButton.addEventListener('click', () => goToSlide(index + 1));

// Carrossel automático
let autoSlide = setInterval(() => {
    goToSlide(index + 1);
}, 3000); // Muda de slide a cada 3 segundos

// Para impedir o conflito com outros botões e garantir que a transição funcione corretamente
carousel.addEventListener('transitionend', () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        goToSlide(index + 1);
    }, 3000); // Reinicia o intervalo de slides automáticos
});


