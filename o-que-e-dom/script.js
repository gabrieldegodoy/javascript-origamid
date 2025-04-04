// DOM
//Document Object Model (DOM)
//É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser
//Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

//window.alert('isso mesmo');
const href = window.location.href;
console.log(href);

const h1Selecionado = document.querySelector('h1'); //seleciona o primeiro h1
document.body; //retorna o body

// DOM 2
const h1ClasseAdd = h1Selecionado.classList.add('titulo-principal');
const h1Classe = h1Selecionado.classList;




const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', function () {
  console.log('Clicou em ', titulo.innerText);
});
// ativa a função callback ao click no titulo


// EXERCÍCIO
// Retorne o url da página atual utilizando o objeto window
const href1 = window.location.href;

console.log(href1);


// Seleciona o primeiro elemento da página que
// possua a classe ativo

const ativo = document.querySelector('.ativo');

console.log(ativo);

// Retorne a linguagem do navegador
const lang = navigator.language;

console.log(lang);

// Retorne a largura da janela 

const widthWindow = window.innerWidth;

console.log(widthWindow + 'px');