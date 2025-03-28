//BOOLEAN
var possuiGraduacao = true;
var possuiDoutorado = false;

//CONDICIONAIS IF E ELSE
//verificar se uma expressão é verdadeira com if, caso contrário o else será ativado
var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}

//else if
var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiDoutorado && possuiGraduacao) {
  console.log('Possui graduação e doutorado');
} else if(possuiDoutorado && !possuiGraduacao) {
  console.log('Possui doutorado, mas não graduação');
} else if(possuiGraduacao && !possuiDoutorado) {
  console.log('Possui graduação, mas não doutorado');
} else {
  console.log('Não possui graduação nem doutorado');
}
// retorna Possui Graduação, mas não possui doutorado

// TRUTHY E FALSY
// Falsy
/*if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

  //todo o resto é true
// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})*/

var nome = 5 - 5;

if(nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

//operador lógico de negação: ! -> inverte o valor

// !! verifica se é true ou false, pois inverte duas vezes, ou seja, retorna o valor que é próprio

// OPERADORES DE COMPARAÇÃO
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

// maior ou igual é assim: >=, pois => é reservado para função, mas o menor igual é <=

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

console.log('20' !== 20);