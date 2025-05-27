// FACTORY FUNCTION
//"use strict";

//function createButton(text) {
//  function element() {
//    const buttonElement = document.createElement('button');
//    buttonElement.innerText = text;
//    return buttonElement;
//  }

//  return Object.freeze({
//    text,
//    element
//  });
//}

//const btnComprar = createButton('Comprar');
//const btnVender = createButton('Vender');

//btnComprar.text = 'Novo Texto';
//btnVender.element = 'Novo texto'

//console.log(btnComprar, btnVender);

// metodos/variaveis privadas
//function criarPessoa(nome, sobrenome) {
//  const nomeCompleto = `${nome} ${sobrenome}`;

//  function andar() {
//    return `${nomeCompleto} andou`;
//  }

//  function nadar() {
//    return `${nomeCompleto} nadou`;
//  }

//  return {
//    nome,
//    sobrenome,
//    andar,
//    nadar
//  }
//}

//const pessoa = criarPessoa('Andy', 'Wine');

//console.log(pessoa);

//function Pessoa(nome) {
//  if (!(this instanceof Pessoa)) //verifica se tem no prototype do this se tem os métodos e propriedades de Pessoa
//    return new Pessoa(nome);
//  this.nome = nome;
//}

//Pessoa.prototype.andar = function() {
//  return `${this.nome} andou`;
//}

//const designer = Pessoa('André');

//console.log(designer)

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements)

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    })
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    })
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass
  }
}

const btns = $$('button');

console.log(btns.hide().show());

function handleClick(event) {
  console.log(event.target);
}

btns.on('click', handleClick);
btns.addClass('active');