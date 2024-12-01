import { Conta } from './Conta.js';

//animação ao abrir o icone de busca
const iconBusca = document.getElementById("clickBusca");
const inBusca = document.getElementById("inBusca");
const divBusca = document.querySelector(".barraPesquisa");

iconBusca.addEventListener('click', function(){
    inBusca.focus();
})

inBusca.addEventListener('focus', function(){
    iconBusca.src = 'images/seachComum.png';
    divBusca.classList.add('focada');
})

inBusca.addEventListener('blur', function(){
    iconBusca.src = 'images/seachWhite.png';
    divBusca.classList.remove('focada');
})

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

    document.querySelector('.bodyNoticias').classList.add('desfocadoNoticias');
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
    if(aba.classList.contains('abaMovelEntrar')){
        aba.classList.remove('abaMovelEntrar');
        
        inputEmail.classList.remove('inputOcultoLogin');
        inputEmail.classList.add('inputAtivoLogin');

        inputCodigo.classList.remove('inputAtivoLogin');
        inputCodigo.classList.add('inputOcultoLogin');

        btEntrar.classList.remove('btAtivoLogin');
        btEntrar.classList.add('btOcultoLogin');

        btSolicitar.classList.remove('btOcultoLogin');
        btSolicitar.classList.add('btAtivoLogin');
    }else{
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
    document.querySelector('.bodyNoticias').classList.remove('desfocadoNoticias');
    document.getElementById('abaLogin').classList.remove('abaLoginVisivel');
})

//cadastro de contas

const vetContas = [];
document.getElementById('btSolicitar').addEventListener('click', function () {
    const conta = new Conta(inEmail.value);
    vetContas.push(conta)

    if (vetContas.length > 0) {
        document.querySelector('.bodyNoticias').classList.remove('desfocadoNoticias');
        document.getElementById('abaLogin').classList.remove('abaLoginVisivel');
    }
})

document.getElementById('btEntrarLogin').addEventListener('click', function () {
        document.querySelector('.bodyNoticias').classList.remove('desfocadoNoticias');
        document.getElementById('abaLogin').classList.remove('abaLoginVisivel');

        window.location.href = "abaNoticiasAdm.html";

})
//carrega as noticias
document.addEventListener("DOMContentLoaded", () => {
    const noticiasContainer = document.getElementById("noticias");

    // Faz a requisição ao backend em PHP
    fetch("assets/php/buscaNoticia.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar notícias");
            }
            return response.json();
        })
        .then(noticias => {
            // Itera pelas notícias e as insere no HTML
            noticias.forEach(noticia => {
                const noticiaDiv = document.createElement("div");
                    noticiaDiv.className = "listNoticia";
                    noticiaDiv.innerHTML = `
                        <div class="listNoticia">
                        <div class="ftListNoticia"><img src="assets/images/uploads/${noticia.imagem}" alt=""></div>
                        <div class="detalhesListNoticia">
                            <p class="dataListNoticia">${noticia.data}</p>
                            <p class="tituloListNoticia">${noticia.titulo}</p>
                            <p class="descricaoListNoticia">${noticia.descricao}</p>
                        </div>
                    `;
                noticiasContainer.appendChild(noticiaDiv);
            });
        })
        .catch(error => {
            console.error(error);
            noticiasContainer.innerHTML = "<p>Erro ao carregar notícias.</p>";
        });
});
