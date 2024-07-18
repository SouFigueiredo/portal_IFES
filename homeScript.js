document.getElementById('btCriar').addEventListener('click', function () {
    document.querySelector('.conteudoHome').classList.add('desfocado');
    document.getElementById('abaLogin').classList.add('abaLoginVisivel');
})

document.getElementById('btVoltarLogin').addEventListener('click', function(){
    document.querySelector('.conteudoHome').classList.remove('desfocado');
    document.getElementById('abaLogin').classList.remove('abaLoginVisivel');
})

