// LOOPS E ITERABLE

//Iterable - método Symbol.iterator
// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'Isso é JavaScript';

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));


//Loop for...of - faz loop por cada um dos valores do objeto, desde que seja iterável
const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
  console.log(fruta);
}

for(const char of frase) {
  console.log(char);
}

//com spread, que também só pode ser usado em iteráveis
const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.background = 'blue';
}

console.log(...buttons);

//for...in - loop em objeto não iterável
const carro = {
  marca: 'Honda',
  ano: 2018,
}

for(const key in carro) {
  console.log(`${key}: ${carro[key]}`);
}

//Do / While
let i = 0;
do {
  console.log(i++);
} while (i <= 5);

// EXERCÍCIOS
// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lis = document.querySelectorAll('li');

for(const li of lis) {
  li.classList.add('active');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

const listaWindow = {};

for(const prop in window) {
  listaWindow[prop] = `${prop}: ${window[prop]}`;
}

console.log(listaWindow);

