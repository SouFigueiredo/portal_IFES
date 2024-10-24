// Detecta o clique na div e ativa o input de arquivo
document.querySelector('.inputImagemNoticia').addEventListener('click', function() {
    document.getElementById('addImagemNoticia').click();
  });

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


//quando clica nas opções de adm
document.querySelector('.opcao').addEventListener('click', function(){
    window.location.href = 'abaHome.html';
});

document.getElementById('formNoticia').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio normal do formulário

    // Cria um objeto FormData para enviar os dados do formulário
    var formData = new FormData(this);

    // Cria uma nova requisição AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './assets/php/criaNoticia.php', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Se o upload foi bem-sucedido, exibe a resposta do servidor
            alert(xhr.responseText);
        } else {
            alert(`Erro ao enviar a notícia: ${xhr.statusText}`);
        }
    };

    // Envia a requisição
    xhr.send(formData);
});
