import { Conta } from './Conta.js';

const inName = document.getElementById('inName');
const inMatricula = document.getElementById('inMatricula');
const inSenha = document.getElementById('inSenha');
//para desfocar ou focar o fundo do site

document.getElementById('linkConta').addEventListener('click', function () {
    document.querySelector('.conteudoHome').classList.add('desfocado');
    setTimeout(function () {
        document.getElementById('abaLogin').classList.add('abaLoginVisivel');
    }, 500);
})

document.getElementById('btCriar').addEventListener('click', function () {
    document.querySelector('.conteudoHome').classList.add('desfocado');
    setTimeout(function () {
        document.getElementById('abaLogin').classList.add('abaLoginVisivel');
    }, 500);
})

document.getElementById('btVoltarLogin').addEventListener('click', function () {
    document.querySelector('.conteudoHome').classList.remove('desfocado');
    document.getElementById('abaLogin').classList.remove('abaLoginVisivel');
})

//cadastro de contas

const vetContas = [];

document.getElementById('btCriarConta').addEventListener('click', function () {
    const conta = new Conta(inName.value, inMatricula.value, inSenha.value);
    vetContas.push(conta)

    if (vetContas.length > 0) {
        document.querySelector('.conteudoHome').classList.remove('desfocado');
        document.getElementById('abaLogin').classList.remove('abaLoginVisivel');
    }
})