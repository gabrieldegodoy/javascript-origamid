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