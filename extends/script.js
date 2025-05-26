//EXTENDS
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou!');
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete; //esse this cria uma propriedade no objeto que está sendo criadopelo constructor, como o valor do parametro atribuido a ela nesse caso.
  }
  acelerar() {
    super.acelerar();
    console.log('Muito!');
  }
  empinar() {
    console.log('Moto empinou com ' + this.rodas + ' rodas.');
  }
}

const honda = new Moto(2);