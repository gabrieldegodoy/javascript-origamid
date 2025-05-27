//FUNCTION EXPRESSION


//function declaration
//function somar(a,b) {
//  return a + b;
//}

//somar(4,2); //6

//function expression
//const somar = function(a,b) {
//  return a + b;
//}

//somar(4,2); //6

//Arrow Function
//const somar = (a, b) => a + b;
//somar(4, 2)

//const quadrado = a => a * a;
//quadrado(4);

// IIFE - Immediately Invoked Function Expression - isola escopo (mesma coisa que os módulos)

//const instrumento = 'Violão';

//(() => {
//  const instrumento = 'Guitarra';
//  console.log(instrumento);
//})();

//console.log(instrumento);

// EXERCÍCIOS
// Remova o erro
//const priceNumber = n => +n.replace('R$', '').replace(',', '.');
//console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

//const carro = 'Honda';

//(() => {
//  const carro = 'Ford';
//  console.log(carro);
//})();

//console.log(carro);


// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function() {
  console.log('Teste de Active');
});