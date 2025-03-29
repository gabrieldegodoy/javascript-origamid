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
