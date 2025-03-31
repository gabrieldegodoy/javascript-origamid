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
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20