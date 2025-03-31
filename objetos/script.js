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