//animação ao abrir o icone de busca
const iconBusca = document.getElementById("clickBusca");
const inBusca = document.getElementById("inBusca");
const divBusca = document.querySelector(".barraPesquisa");

iconBusca.addEventListener('click', function () {
    inBusca.focus();
})

inBusca.addEventListener('focus', function () {
    iconBusca.src = 'images/seachComum.png';
    divBusca.classList.add('focada');
})

inBusca.addEventListener('blur', function () {
    iconBusca.src = 'images/seachWhite.png';
    divBusca.classList.remove('focada');
})

//
const barraUser = document.querySelector('.barraUser');
const linksConta = document.querySelector('.linksConta');

// Adiciona a classe ao clicar na barra ou em qualquer filho da barra
barraUser.addEventListener('click', function () {
    if (barraUser.classList.contains('focadaUser')) {
        barraUser.classList.remove('focadaUser');
        setTimeout(function () {
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