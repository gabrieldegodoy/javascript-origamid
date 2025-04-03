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
