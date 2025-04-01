// OBJETOS 1

//conjunto de variáveis e funções, que são chamadas de prodriedades e métodos.
var pessoa = {
  nome: 'André', //propriedade
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

//MÉTODOS
//é uma propriedade que possui uma função no local do seu valor
var quadrado = {
  lados: 4, //propriedade
  area: function(lado) { //método
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

//Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}


// UM OBJETO SERVE PARA ORGANIZAR O CÓDIGO
Math.PI; // 3.14
Math.random(); // número aleatório, quebrado, de zero a um

var pi = Math.PI;
console.log(pi); // 3.14

// OBJETOS 2

//Criar um objeto
//Um objeto é criado utilizando as chaves {}
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

//Dot Notation Get
//Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'

//Dot Notation Set
//Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

//Adicionar Propriedades e Métodos
//Basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';

//Palavra-chave this
//this irá fazer uma referência ao próprio objeto.
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

//Protótipo e Herança
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

//Exercício
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto, que mostre o seu nome completo

var dadosPessoais = {
  nome: 'Gabriel',
  sobrenome: 'Godoy',
  idade: 23,
  carro: 'Mustang',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
};

console.log(dadosPessoais);
console.log(dadosPessoais.nomeCompleto());



// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latiu!';
    } else {
      return 'Nada';
    }
  }
}

console.log(cachorro);
console.log(cachorro.latir('homem'));

// TUDO É OBJETO

