const contato = document.querySelector('#contato');
const dados = {};

function handleChange(event) {
/*  const target = event.target;

  if(!target.checkValidity()) {
    target.classList.add('invalido');
    contato.nome.setCustomValidity('Campo obrigatório.');
    contato.email.setCustomValidity('Insira um e-mail válido.');
    target.nextElementSibling.innerText = target.validationMessage;
  }
  console.log(target.checkValidity());
  console.log(target.value);*/

  //document.body.style.backgroundColor = event.target.value;
  dados[event.target.name] = event.target.value;

}

contato.addEventListener('change', handleChange);