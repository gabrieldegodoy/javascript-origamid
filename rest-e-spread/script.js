// REST E SPREAD
//arguments
function perimetroForma(lado, totalLados = 4) {
  const argArray = Array.from(arguments);
  argArray.forEach(arg => {
    console.log(arg);
  });
  console.log(argArray);
  return lado * totalLados;
}

perimetroForma(10, 4);

//rest
function anunciarGanhadores(first, secound, ...ganhadores) { //...ganhadores recebe todos os argumentos passados
  ganhadores.forEach(ganhador => {
    const res = `${first}, ${[...ganhadores]}`;
    console.log(res);
  })
}

anunciarGanhadores('Pedro', 'Marta', 'Maria');

//spread
const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas);

//--------------------------------------------------------

const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); //33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros); //vai percorrer toda a array e ver qual é o max

console.log(numeroMaximoSpread);