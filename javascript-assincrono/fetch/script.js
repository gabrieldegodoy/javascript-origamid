// BUSCA CEP
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
  console.log(e);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(r => r.json())
  .then(b => {
    const info = `
    CEP: ${b.cep}
    Rua: ${b.logradouro}
    Bairro: ${b.bairro}
    Cidade: ${b.localidade}
    Estado: ${b.uf}
  `;
    resultadoCep.innerText = info;
  })
}


// BTC
const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(r => r.json())
  .then(b => {
    console.log(b.BRL.buy);
    btcDisplay.innerText =('R$ ' + b.BRL.buy).replace('.', ',');
  })
}

//setInterval(fetchBtc, 1000 * 30);

fetchBtc();


// PIADA CHUCK NORRIS
const chuckJoke = document.querySelector('.chuckJoke');
const btnProxima = document.querySelector('.proxima');

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(b => {
    console.log(b.value);
    chuckJoke.innerText = b.value;
  })
}

//setInterval(fetchBtc, 1000 * 30);

btnProxima.addEventListener('click', puxarPiada);

puxarPiada();


/*const div = document.createElement('div');

fetch('https://viacep.com.br/ws/12929701/json/').then(r => {
  console.log(r);
  r.headers.forEach(console.log);
});*/

/*fetch('https://viacep.com.br/ws/12929701/json/').then(r => {
  const r2 = r.clone();
  r.text().then((text) => {
    console.log(text);
  })
  r2.json().then((json) => {
    console.log(json);
  })
  console.log(r);
})
  .then(b => {
  console.log(b);
});*/

/*fetch('./imagem.png').then(r => r.blob()).then(b => {
  const blobUrl = URL.createObjectURL(b);
  const imagemDom = document.querySelector('img');
  imagemDom.src = blobUrl;
  console.log(blobUrl);
  console.log(b);
});*/

/*const div = document.createElement('div');

fetch('./sobre.html').then(r => r.text()).then(b => {
  console.log(b);
  div.innerHTML = b;
  const titulo = div.querySelector('h1');
  console.log(titulo);
  document.querySelector('h1').innerText = titulo.innerText;
});*/
