console.log(document.getElementById('titulo'));//retorna o titulo da página.
console.log(document.getElementsByTagName('li'));//retorna todos os elementos li.
console.log(document.getElementsByClassName('textos'))//retorna todos os elementos da classe especificada.
console.log(document.querySelectorAll('.primeira-classe .segunda-classe'));//modelo de busca personalizada geralmente usada pra pegar elementos com mais de uma classe.
console.log(document.querySelectorAll('li .opcao'));
/*

document.createElement(element);//vai criar um elemento pai.
document.removeChild(element);//vai deletar um elemento filho sem precisar deletar o elemento pai.
document.appendChild(element);//vai inserir um elemento filho.
document.replaceChild(element);//vai substituir um elemento filho.

*/
function clicou(){
    alert("Clicou");
}
button = document.getElementsByClassName('button')[0] // tem que declarar o indice do elemento pois o getElementsByClassName nos retorna uma coleção em formato de array.(retorna assim para caso haja mais de 1 elemento com a mesma classe);

button.addEventListener('click',clicou);


function entrou(){
    document.getElementById('titulo').innerHTML="Nossa Página";
    //document.getElementById('titulo').style.color="purple";
    document.getElementById("titulo").style.color="purple";
    document.getElementById("titulo").style.border="2px solid purple";  
}
function saiu(){
    document.getElementById("titulo").style.color="black";
    document.getElementById("titulo").style.border="none";
}

const MEU_ELEMENTO = document.getElementById('titulo');

MEU_ELEMENTO.classList.add("novo-estilo");
//Adiciona a classe
MEU_ELEMENTO.classList.remove("classe");
//Remove uma classe
MEU_ELEMENTO.classList.toggle("dark-mode");
//caso naõ exista ele irá adicionar a classe, caso exista ele irá tirar.
