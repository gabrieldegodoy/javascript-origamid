// REGEXP

//Procura: a
// const padraoRegexp = /J/; //seleciona primeiro a que encontra.

// const texto = 'JavaScript';
// const novoTexto = texto.replace(padraoRegexp, 'B');

// console.log(novoTexto);

//Literal
//procura: J seguido de a, v e a
// const regexp = /Java/;

// const texto = 'JavaScript';
// const novoTexto = texto.replace(regexp, 'Type');

// console.log(novoTexto);

//Flag: g
//As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.
// Procura: Todo a
// const regexp = /a/g;

// const texto = 'JavaScript';
// const novoTexto = texto.replace(regexp, 'i');

// console.log(novoTexto); // JiviScript

// Flag: i
//Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.
// Procura: Todo PE, Pe, pE e pe
// const regexp = /Pe/gi;


// const texto = 'Perdeu perdido';
// const novoTexto = texto.replace(regexp, 'Ba');

// console.log(novoTexto); // Bardeu Bardido

// CHARACTER CLASS
//Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.
// Procura: Todo a, A, i, I
// const regexp = /[ai]/gi;


// const texto = 'JavaScript';
// const novoTexto = texto.replace(regexp, 'u'); // JuvuScrupt

// console.log(novoTexto);

// Character Class e Especiais
//Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.
// Procura: - ou .
// const regexp = /[-.]/g;

// '111.222-333-44'.replace(regexp, '');
// 11122233344

//Um ou Outro
//Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.
// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
// const regexp = /Bra[sz]il/g;

// 'Brasil é com z: Brazil'.replace(regexp, 'Prazer');
// Prazer é com z: Prazer

//De A à Z
//O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.
// Busca por itens de a à z
// const regexp = /[a-z]/g;

// 'JavaScript é a linguagem.'.replace(regexp, '0');
// J000S00000 é 0 000000000.

// Busca por itens de a à z e A à Z
// const regexp = /[a-zA-Z]/g;

// 'JavaScript é a linguagem.'.replace(regexp, '1');
// 1111111111 é 1 111111111.

// Busca por números de 0 à 9
// const regexpNumero = /[0-9]/g;

// '123.333.333-33'.replace(regexpNumero, 'X');
// XXX.XXX.XXX-XX






