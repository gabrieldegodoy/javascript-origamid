//setTimeout e setInterval
//function espera(texto) {
//  console.log(texto);
//}
//setTimeout(espera, 1000, 'Depois de 1s');

/*const btn = document.querySelector('button');
const section = document.querySelector('section');

function handleClick(event) {
  event.preventDefault();
  section.classList.add('active');
}

console.log('console 1');

setTimeout(() => {
  console.log('timeout 2');
}, 2000);

console.log('console 2');

btn.addEventListener('click', handleClick);*/

/*for(let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300);
}

for(let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}*/

/*const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
  setTimeout(function() {
    this.classList.add('active');
  }, 1000)
}
// Erro pois window.classList não existe
//Corrige com arrow function, pois a arrow function usa o this não no contexto do objeto em questão, como o setTimeout que pertence ao window, mas no contexto do objeto pai, que no caso é o btn

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

// this agora é btn.
function handleClick(event) {
  setTimeout(() => {
    this.classList.add('active');
  }, 1000)
}*/

// SETINTERVAL
/*function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000);*/

/*const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}*/


// Mude a cor da tela para azul e depois para vermelho a cada 2s.

/*function vermelho() {
  document.body.style.backgroundColor = "red";
}
setInterval(vermelho, 2000);

function azul() {
  document.body.style.backgroundColor = "blue";
}
setInterval(azul, 4000);*/

/*function mudarClasse() {
  document.body.classList.toggle('active');
}

setInterval(mudarClasse, 2000);*/



// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', initCont);
pausar.addEventListener('click', pauseCont);
pausar.addEventListener('dblclick', resetCont);


let i = 0;
let timer;

function initCont() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 300);
  iniciar.setAttribute('disabled', '');
}

function pauseCont() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
  console.log('pausar');
}

function resetCont() {
  tempo.innerText = 0;
  i = 0;
  console.log('resetar');
}




