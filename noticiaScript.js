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