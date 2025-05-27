// DESTRUCTURING
// const carro = {
//   marca: 'Fiat',
//   ano: 2018,
//   portas: 4
// }

// const { marca, ano } = carro;

// console.log(marca);
// console.log(ano);

// const cliente = {
//   nome: 'André',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const { digitais, fisicas, digitais: { livros, videos } } = cliente.compras;

// console.log(digitais);
// console.log(fisicas);
// console.log(livros);
// console.log(videos);

// const frutas = ['Banana', 'Uva', 'Morango', 'Maçã', 'Pêra'];

// //sem destructuring
// const primeiraFruta = frutas[0];
// const segundaFruta = frutas[1];
// const terceiraFruta = frutas[2];

// //com destructuring
// const [primeira, , terceira, ...rest] = frutas;
// document.body.innerText = JSON.stringify([primeira, terceira, ...rest]);


// function handleKeyboard({key, keyCode}) {
//   console.log(key, keyCode);
// }

// document.addEventListener('keyup', handleKeyboard);

// EXERCÍCIOS
// Extraia o backgroundColor, color e margin do btn
// const btn = document.querySelector('button');
// const btnStyles = getComputedStyle(btn);

// const {backgroundColor, color, margin} = btnStyles;

// console.log(backgroundColor, color, margin);


// Troque os valores das variáveis abaixo
// let cursoAtivo = 'JavaScript';
// let cursoInativo = 'HTML';

// [cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]
// ;
// console.log(cursoAtivo, cursoInativo);


// Corrija o erro abaixo
const cachorro = {
 nome: 'Bob',
 raca: 'Labrador',
 cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;

