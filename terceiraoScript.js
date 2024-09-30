const btEntrarLogin = document.getElementById('btEntrarLogin');
const inEmail = document.getElementById('inEmail');

//para desfocar ou focar o fundo do site

document.getElementById('btEntrar').addEventListener('click', function () {
    if (aba.classList.contains('abaMovelEntrar')) {

        aba.classList.remove('abaMovelEntrar');

        // Recarregar os seletores
        inputEmail = document.querySelector('.inputOcultoLogin');
        inputCodigo = document.querySelector('.inputAtivoLogin');

        inputEmail.classList.remove('inputOcultoLogin');
        inputEmail.classList.add('inputAtivoLogin');

        btEntrar.classList.remove('btAtivoLogin');
        btEntrar.classList.add('btOcultoLogin');

        btSolicitar.classList.remove('btOcultoLogin');
        btSolicitar.classList.add('btAtivoLogin');

        inputCodigo.classList.remove('inputAtivoLogin');
        inputCodigo.classList.add('inputOcultoLogin');
    }

    document.querySelector('.bodyHome').classList.add('desfocado');
    setTimeout(function () {
        document.getElementById('abaLogin').classList.add('abaLoginVisivel');
    }, 400);
})


//detalhe da aba de login
let aba = document.querySelector('.abaMovel');
let inputEmail = document.querySelector('.inputAtivoLogin');
let inputCodigo = document.querySelector('.inputOcultoLogin');
let btEntrar = document.querySelector('.btOcultoLogin');
let btSolicitar = document.querySelector('.btAtivoLogin');

document.getElementById('mudaAba').addEventListener('click', function () {
    if (aba.classList.contains('abaMovelEntrar')) {
        aba.classList.remove('abaMovelEntrar');

        inputEmail.classList.remove('inputOcultoLogin');
        inputEmail.classList.add('inputAtivoLogin');

        inputCodigo.classList.remove('inputAtivoLogin');
        inputCodigo.classList.add('inputOcultoLogin');

        btEntrar.classList.remove('btAtivoLogin');
        btEntrar.classList.add('btOcultoLogin');

        btSolicitar.classList.remove('btOcultoLogin');
        btSolicitar.classList.add('btAtivoLogin');
    } else {
        aba.classList.add('abaMovelEntrar');

        inputEmail.classList.add('inputOcultoLogin');
        inputEmail.classList.remove('inputAtivoLogin');

        inputCodigo.classList.remove('inputOcultoLogin');
        inputCodigo.classList.add('inputAtivoLogin');

        btEntrar.classList.remove('btOcultoLogin');
        btEntrar.classList.add('btAtivoLogin');

        btSolicitar.classList.remove('btAtivoLogin');
        btSolicitar.classList.add('btOcultoLogin');
    }
});

//botao para sair da tela de login
const btVoltar = document.getElementById("btVoltar");
btVoltar.addEventListener('click', function () {
    document.querySelector('.bodyHome').classList.remove('desfocado');
    document.getElementById('abaLogin').classList.remove('abaLoginVisivel');
})

//cadastro de contas

const vetContas = [];
document.getElementById('btSolicitar').addEventListener('click', function () {
    const conta = new Conta(inEmail.value);
    vetContas.push(conta)

    if (vetContas.length > 0) {
        document.querySelector('.bodyHome').classList.remove('desfocado');
        document.getElementById('abaLogin').classList.remove('abaLoginVisivel');
    }
})

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

//entrar como adm

document.getElementById('btEntrarLogin').addEventListener('click', function () {
    document.querySelector('.bodyHome').classList.remove('desfocado');
    document.getElementById('abaLogin').classList.remove('abaLoginVisivel');

    window.location.href = "abaTerceiraoAdm.html";

})


//a barra de user se expande
const barraUser = document.querySelector('.barraUser');
const linksConta = document. querySelector('.linksConta');

// Adiciona a classe ao clicar na barra ou em qualquer filho da barra
barraUser.addEventListener('click', function () {
    if (barraUser.classList.contains('focadaUser')) {
        barraUser.classList.remove('focadaUser');
        linksConta.classList.remove('sairConta');
    } else {
        barraUser.classList.add('focadaUser');
        linksConta.classList.add('sairConta');

    }
});

// Remove a classe ao clicar fora da barraUser
document.addEventListener('click', function (event) {
    if (!barraUser.contains(event.target)) {
        barraUser.classList.remove('focadaUser');
        linksConta.classList.remove('sairConta');
    }
});