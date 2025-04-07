const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const primeiraUl = document.querySelector('ul');
const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

gridSectionNode.forEach(function(item, index) {
  console.log(item);
});


 // EXERCÍCIOS
 // Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens1 = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens1);


// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll ('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
//const ultimoP = document.querySelector('.copy p:last-child');
//console.log(ultimoP);

//Correção
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[--paragrafos.length]);


//FOREACH E ARROW FUNCTION

//forEach
//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});

//Parâmetros do forEach
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;
const imgs1 = document.querySelectorAll('img');

imgs1.forEach(function(valorAtual, index, array){
  console.log(valorAtual); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

//forEach e Array
//forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

//Arrow Function
//Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
const imgs3 = document.querySelectorAll('img');

imgs3.forEach((item) => {
  console.log(item);
});

//Parâmetros e Parênteses
const imgs4 = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs4.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs4.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
//let i = 0;
//imgs4.forEach(() => {
//  console.log(i++);
//});
//É melhor utilizar os parênteses

//Return
//É possível omitir as chaves {} para uma função que retorna uma linha.
const imgs5 = document.querySelectorAll('img');

imgs5.forEach(item => 
  console.log(item)
);

imgs5.forEach(item => console.log(item));
//Não é permitido fechar a linha com ;

//Exercício
// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
const paragrafos1 = document.querySelectorAll('p');
paragrafos1.forEach(item => console.log(item.innerText));




// Como corrigir os erros abaixo:
const imgs6 = document.querySelectorAll('img');

imgs6.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs6.forEach(() => {
  console.log(i++);
});

imgs6.forEach(() => i++);
