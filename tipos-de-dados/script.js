//Todos os tipos de dados são primitivos, exceto os objetos.
//Primitivos são dados imutáveis.

var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

// VERIFICAR TIPO DE DADO
var nome = 'Gabriel';
console.log(typeof nome);
//retorna string

// STRING
var nome = 'Gabriel';
var sobrenome = 'Godoy';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols'
console.log(frase);

// soma de número com string resultado string (em exemplo com numero dentro da string + numero ele concatena, não soma)
var ano = '2018';
var mes = 8;
console.log(ano + mes); //retornou 20188

// TEMPLATE STRING
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
var frase3 = `Romário fez ${gols * 2} gols`;
console.log(frase1, frase2, frase3);
//Você deve passar expressões / variáveis dentro de ${}
//Nesse caso utiliza crase nolugar das aspas e ${} no lugar do +
//Essa multiplicação eu nunca poderia fazer em uma string normal

//DESAFIO
var animal = 'Jacaré';
var numero = '20';
var idade = 23;

var nome = 'Gabriel';
var sobrenome = 'Godoy';
var nomeCompleto = nome + ' ' + sobrenome;
//poderia ser escrito como var nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

var frase = "It's time";

console.log(typeof nome);