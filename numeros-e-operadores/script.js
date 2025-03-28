//NÚMEROS
var idade = 28;
var gols = 1000;
var pi = 3.14; //ponto para decimal
var exp = 2e10; //20000000000

console.log(idade, gols, pi, exp);

//OPERADORES ARITMÉTICOS
var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4, o resto da divisão

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

//OPERADORES ARITMÉTICOS (string)
var soma = '100' + 50; //10050, apenas a soma concatena
var subtracao = '100' - 50; //50
var multiplicacao = '100' * 2; //200
var divisao = 'comprei 10' / 2; //NaN (Not aNumber)

//funcao isNaN() para saber se é true ou false, se é um número ou não

// A ORDEM IMPORTA - Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var idade = '28';
var somaIdade = 5;

console.log(+idade + somaIdade); // esse + na frente do idade transformou a string em numero, mas se tiver letra junto retorna NaN



// EXERCÍCIO
//Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN
var numeroNaN1 = +'2050z' + 59;
var numeroNaN2 = 'Biel 57k' - 83;
console.log(numeroNaN1);
console.log(numeroNaN2);

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

//substitui peso por +numero na divisao - Correção: substituir a var numero por +'80' / 2 e a pesoPorDois = peso somente, ou até mesmo excluí-la
