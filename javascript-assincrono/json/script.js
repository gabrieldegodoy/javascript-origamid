const aulas = document.querySelector('.aulas');

fetch('./dados.json')
.then(r => r.json())
.then(b => {
  b.forEach(item => {
    const info = `
      ID: ${item.id}
      Aula: ${item.aula}
      Tempo: ${item.tempo}
    `
    aulas.innerText = info;
  })
  
});

//json() é igual a JSON.parse()

const configuracoes ={
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript"
}

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));
