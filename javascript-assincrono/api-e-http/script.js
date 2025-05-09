// API
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(r => r.json())
.then(b => {
  console.log(b);
})

//REQUISIÇÃO HTTP
/*const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"aula": "JavaScript"}'
};

fetch(url, options)
.then(r => r.json())
.then(b => {
  console.log(b);
})*/

/*const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
  method: 'HEAD'
};

fetch(url, options)
.then(r => {
  r.headers.forEach(console.log);
})*/

const url = 'https://www.google.com';

fetch(url)
.then(r => r.text())
.then(b => console.log(b))