//barra de user
const barraUser = document.querySelector('.barraUser');
const linksConta = document.querySelector('.linksConta');

// Adiciona a classe ao clicar na barra ou em qualquer filho da barra
barraUser.addEventListener('click', function () {
    if (barraUser.classList.contains('focadaUser')) {
        setTimeout(function () {
            barraUser.classList.remove('focadaUser');
            linksConta.classList.remove('linkVisivel');
        }, 100);
    } else {
        barraUser.classList.add('focadaUser');
        setTimeout(function () {
            linksConta.classList.add('linkVisivel');
        }, 200);
    }
});

// Remove a classe ao clicar fora da barraUser
document.addEventListener('click', function (event) {
    if (!barraUser.contains(event.target)) {
        barraUser.classList.remove('focadaUser');
        setTimeout(function () {
            linksConta.classList.remove('linkVisivel');
        }, 200);
    }
});

// Seleciona os elementos necessários
const itensTurmas = document.querySelector('.itensTurmas');
const marcadores = document.querySelectorAll('.marcador');
const slides = document.querySelectorAll('.carrosselTurmasItens');
const totalFotos = marcadores.length;
const intervalo = 2000; // Tempo em milissegundos para a transição automática

let slideIndex = 0;

// Função para mostrar um slide específico
function mostrarSlide(index) {
    // Move os slides
    itensTurmas.style.transform = `translateX(${-index * 100}%)`;

    slides.forEach(slide => slide.classList.remove('active'));
    marcadores.forEach(marcador => marcador.classList.remove('active'));
    // Adiciona a classe active ao slide e marcador atuais
    slides[index].classList.add('active');
    marcadores[index].classList.add('active');
}

// Função para alterar o slide ao clicar nos marcadores
marcadores.forEach((marcador, index) => {
    marcador.addEventListener('click', () => {
        slideIndex = index;
        mostrarSlide(slideIndex);
    });
});

// Inicia o carrossel e define o intervalo automático
function iniciarCarrossel() {
    mostrarSlide(slideIndex);
    setInterval(() => {
        slideIndex = (slideIndex + 1) % totalFotos;
        mostrarSlide(slideIndex);
    }, intervalo);
}

iniciarCarrossel();

let evento1 = document.querySelector('.imgEvent1');
let evento2 = document.querySelector('.imgEvent2');
let evento3 = document.querySelector('.imgEvent3');
let bodyHome = document.querySelector('.bodyHome');
let popUp = document.querySelector('.popUpTerceirao');

evento1.addEventListener('click', function () {
    bodyHome.classList.add('desfocado');
    popUp.classList.add('block');
    // Ação específica para o evento 1
    popUp.innerHTML = '<h2 class="caralho">Informação do evento 1</h2><p>Conteúdo relacionado ao primeiro evento.</p>';
});

evento2.addEventListener('click', function () {
    bodyHome.classList.add('desfocado');
    popUp.classList.add('block');
    // Ação específica para o evento 2
    popUp.innerHTML = '<h2>Informação do evento 2</h2><p>Conteúdo relacionado ao segundo evento.</p>';
});

evento3.addEventListener('click', function () {
    bodyHome.classList.add('desfocado');
    popUp.classList.add('block');
    // Ação específica para o evento 3
    popUp.innerHTML = '<h2>Informação do evento 3</h2><p>Conteúdo relacionado ao terceiro evento.</p>';
});
