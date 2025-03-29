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

// OPERADORES LÓGICOS &&
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão', retorna sempre o ultimo valor verdadeiro, quando não há false. quando há false, retorna primeiro valor false
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true, retorna true ou false pois está submetido ao resultado da operação de comparação >= e <

// // OPERADORES LÓGICOS || (ou) - sempre em busca do primeiro verdadeiro
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

var condicional = (5 - 5) || ('5' + 4) || (10 - 2);
console.log(condicional);


// SWITCH
//Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
var corFavorita = 'Vermelho';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

var corFavorita = 'Rosa';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Rosa':
    console.log('Olhe para as rosas');
    break;
  default:
    console.log('Feche os olhos');
}





// EXERCÍCIO
// Verifique se a sua idade é maior do que a de algum parente

var minhaIdade = 59;
var idadePai = 58;

if(minhaIdade > idadePai) {
  console.log('é maior');
} else if(minhaIdade === idadePai) {
  console.log('é igual');
} else {
  console.log('é menor');
}


// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log(brasil === china);

if(brasil > china) {
  console.log('é maior');
} else if(brasil == china) {
  console.log('é igual');
} else {
  console.log('é menor');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} //Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} //Cão