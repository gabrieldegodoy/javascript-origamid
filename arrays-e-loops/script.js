//Array
//É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox

//Acesse um elemento da array utilizando [n]

//Métodos e Propriedades de uma Array
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

//Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

//For Loop
//Fazem algo repetidamente até que uma condição seja atingida.
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

//numero++ -> numero = numero + numero


// Retorna de 0 a 9 no console
//O for loop possui 3 partes, início, condição e incremento

//While Loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
//O for loop é o mais comum

//ARRAYS E LOOPS 2
