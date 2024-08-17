import { Conta } from './Conta.js';

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

    document.querySelector('.conteudoHome').classList.add('desfocado');
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
    document.querySelector('.conteudoHome').classList.remove('desfocado');
    document.getElementById('abaLogin').classList.remove('abaLoginVisivel');
})

//cadastro de contas

const vetContas = [];
document.getElementById('btSolicitar').addEventListener('click', function () {
    const conta = new Conta(inEmail.value);
    vetContas.push(conta)

    if (vetContas.length > 0) {
        document.querySelector('.conteudoHome').classList.remove('desfocado');
        document.getElementById('abaLogin').classList.remove('abaLoginVisivel');
    }
})