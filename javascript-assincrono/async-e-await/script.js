/*async function puxarDados() {
  try {
    const dadosResponse = await fetch('./dados.json'); //await sempre que tiver promessa que deseja esperar o retorno para continuar
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.aula;
  } 
  catch(erro) {
    console.log(erro);
  }
}

puxarDados();*/

//questão de sintaxe em relação ao then, resulta num código mais limpo, sem encadeamento de then
//try e cathc do async é o then e catch do then


// Iniciar Fetch ao Mesmo Tempo
//Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.
/*async function iniciarAsync() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json');

  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();

  console.log(dadosJSON);
  console.log(clientesJSON);
} //faz os fetchs ao mesmo tempo e as respostas aguarda pelo await
iniciarAsync();*/

//Promise
//O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  });
  console.log('Depois de 1s');
}
iniciarAsync();