// FUNÇÕES
//Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
function/* funtion declaration, declaração de uma função */ areaQuadrado(lado) /* lado é o parâmetro. areaQuadrado é o nome da função declarada*/ {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4


function novaFuncao(event)/* event é o parâmetro, é como se estivesse definindo uma variável */ {
  return event * event;
} //define função

console.log(novaFuncao(2)); // ativa função

function pi() {
  return 3.14;
}

var total = 5 * pi();

//peso e altura são argumentos
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80); //80 e 1.80 são argumentos - argumento é o valor que é passado dentro do parâmetro
imc(60, 1.70); //60 e 1.70 são argumentos

console.log(imc(60, 1.70));

// PARÊNTESES EXECUTA A FUNÇÃO
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato'
  } else {
    return 'Você não gosta de nada'
  }
}
console.log(corFavorita('azul'));

// ARGUMENTOS PODEM SER FUNÇÕES
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento
addEventListener /* é uma função nativa do browser */('click' /* primeiro parâmetro, tipo de evento */, function() /* é uma função anônima/callback - também pode ser expressa sem escrever o function, apenas com () => {} */ {
  console.log('Clicou');
}); //nesse caso, o evento de click manda a função declarada retornar a instrução que foi passada dentro dela

//Outra forma de escrever essa mesma função:
function mostraConsole() {
  console.log('Oi');
}

addEventListener('click', mostraConsole);

// FUNÇÕES

//Pode ou não retornar um valor
//Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc2(peso, altura) {
  const imc2 = peso / (altura ** 2);
  console.log(imc2);
}

imc2(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined

// Valores retornados
// Uma função pode retornar qualquer tipo de dado e até outras funções
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//Retornar diferentes tipos de dados na mesma função não é uma boa ideia

function primeiraIdade(idade1) {
  console.log(typeof idade1);
  if(typeof idade1 !== 'number') {
    return 'Por favor, preencha um número'
  } else if(idade1 >= 60) {
    return true;
  } else {
    return false;
  }
  console.log(idade1);
}

console.log(primeiraIdade(30));

// ESCOPO
//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
//console.log(totalPaises); //erro, totalPaises não definido

//variavel criada fora da função consigo ver dentro, mas criada dentro não consigo ver fora

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

// HOISTING
//Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

// FUNÇÕES 3

// Exercício
// Crie uma função para verificar se um valor é Truthy
var corValor = 'Azul';

function verificaValor() {
  if(corValor === '') {
    return false;
  } else {
    return true;
  }
}

console.log(verificaValor());

//COrreção
function isTruthy(dado) {
  return !!dado;
}

console.log(isTruthy(' '));


// Crie uma função matemática que retorne o perímetro de um quadrado
var ladoQuadrado = 10;

function perimetroQuadrado(perimetro) {
  return perimetro = ladoQuadrado * 4;
}

console.log(perimetroQuadrado());

//Correção
function perimetroQuadrado2(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado2(2));


// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Gabriel', 'Godoy'));

// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

function numeroPar(numero) {
  var numeroVerificado = numero % 2;
  if(numeroVerificado === 0) {
    return 'É par'
  } else {
    return 'É ímpar'
  }
}

console.log(numeroPar(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado1) {
  return typeof dado1;
}

console.log(tipoDado(true));



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
  console.log('Gabriel Godoy');
});



// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar();