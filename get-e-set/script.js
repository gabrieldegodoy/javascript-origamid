//GET E SET
const button = {
  get tamanho() { //só altera quando utiliza o set
    return this._numero; //_ significa que é uma propriedade privada, não tem acesso a ela fora do objeto
  },
  set tamanho(numero) {
    this._numero = numero;
  }
}

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  }
}

frutas.nova = 'Banana'
frutas.nova = 'Morango'

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || button;
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button('Comprar', 'Blue');