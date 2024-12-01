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


//quando clica nas opções de adm
document.querySelector('.opcao').addEventListener('click', function(){
    window.location.href = 'abaHome.html';
});

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
