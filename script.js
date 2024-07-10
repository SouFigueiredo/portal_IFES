// const login = document.querySelector("#btCriarConta");
const inNome = document.getElementById("inNome");
const inMatricula = document.getElementById("inMatricula");
const inSenha = document.getElementById("inSenha");

const btn_Entrar = document.getElementById("btn_Entrar");
const btn_CriarConta = document.getElementById("btn_CriarConta");

function delet(noPai,noFilho) {
    noPai.removeChild(noFilho);
}

    //Aviso do campo nome preenchido incorretamente 
    var avisoNomeIncorreto = document.createElement('span');
    avisoNomeIncorreto.id = 'avisoNomeIncorreto';
    avisoNomeIncorreto.textContent = '*Preencha o campo corretamente';       
    var avisoNome = document.getElementById("avisoNome");

    //Aviso do campo matrícula preenchido incorretamente
    var avisoMatriculaIncorreta = document.createElement('span');
    avisoMatriculaIncorreta.id = 'avisoMatriculaIncorreta';
    avisoMatriculaIncorreta.textContent = '*Preencha o campo corretamente';
    var avisoMatricula = document.getElementById("avisoMatricula");

    //Aviso do campo senha preenchido incorretamente
    var avisoSenhaIncorreta = document.createElement('span');
    avisoSenhaIncorreta.id = 'avisoSenhaIncorreta';
    avisoSenhaIncorreta.textContent = '*Preencha o campo corretamente';
    var avisoSenha = document.getElementById("avisoSenha");

function acaoBotao() {
    if (inNome.value == "") {
        // Adicionar o elemento ao documento
        avisoNome.appendChild(avisoNomeIncorreto);
    
    } else if (inMatricula.value == "") {
        delet(avisoNome,avisoNomeIncorreto)
        avisoMatricula.appendChild(avisoMatriculaIncorreta);

    }else if (inSenha.value == "") {
        delet(avisoMatricula,avisoMatriculaIncorreta)            
        avisoSenha.appendChild(avisoSenhaIncorreta);
    } 
}

btn_CriarConta.addEventListener("click", acaoBotao);
btn_Entrar.addEventListener("click", acaoBotao);



// Cria um elemento <style> no documento
const styleElement = document.createElement('style');

// Adiciona o elemento <style> ao <head> do documento
document.head.appendChild(styleElement);

// Pega o objeto de folha de estilo da nova folha de estilo
const styleSheet = styleElement.sheet;

// Define a nova regra CSS que você quer adicionar
const rule = 'body { background-color: lightblue; }';

// Insere a regra na nova folha de estilo
styleSheet.insertRule(rule, styleSheet.cssRules.length);
    
