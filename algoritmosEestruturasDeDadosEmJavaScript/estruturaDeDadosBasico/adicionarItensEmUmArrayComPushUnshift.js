/*
	Adicionar itens em um array com push() e unshift()

	O comprimento de um array, como os tipos de dados que pode conter, não são
	fixos. Arrays podem ser definidos com um comprimento de qualquer número de
	elementos e elementos podem ser adicionados e removidos com o passar do
	tempo. Em outras palavras, arrays são mutáveis. Nesse desafio, examinaremos
	dois métodos com os quais podemos modificar programaticamente um array:
	Array.push() e Array.unshift().

	Ambos os métodos recebem 1 ou mais elementos como parâmetros e adicionam
	esses elementos ao array no qual o método está sendo chamado; o método
	push() adiciona elementos ao final do array, e unshift() adiciona ao
	início. Considere o seguinte:

	let twentyThree = 'XXIII';
	let romanNumerals = ['XXI', 'XXII'];

	romanNumerals.unshift('XIX', 'XX');

	romanNumerals teria os valores ['XIX', 'XX', 'XXI', 'XXII'].

	romanNumerals.push(twentyThree);

	romanNumerals teria os valores ['XIX', 'XX', 'XXI', 'XXII', 'XXIII'].
	Note que nós também podemos passar variáveis, as quais nos permitem uma
	flexibilidade ainda maior na modificação dinâmica dos dados de nosso array.

*/

// exemplo de uso para os metodos push e unshift
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

console.log('Antes: ', romanNumerals); // Antes:  [ 'XXI', 'XXII' ]


romanNumerals.unshift('XIX', 'XXI');
console.log('Depois: ', romanNumerals); // Depois:  [ 'XIX', 'XXI', 'XXI', 'XXII' ]

romanNumerals.unshift('Depois do depois: ', twentyThree);
console.log(romanNumerals); // [ 'Depois do depois: ', 'XXIII', 'XIX', 'XXI', 'XXI', 'XXII' ]


/*
	Desafio
	Definimos uma função, mixedNumbers, na qual estamos passando o array como
	um argumento. Modifique a função usando push() e unshift() para adicionar
	'I', 2, 'three' no início do array e 7, 'VIII', 9 ao final para que o array
	retornado contenha a representação dos números de 1 a 9 em ordem.
*/

function mixedNumbers(arr) {
  // Altere apenas o código abaixo desta linha
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Altere apenas o código acima desta linha
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
/*
	Saida para exemplo do desafio do projeto
	[
	  'I',     2,
	  'three', 'IV',
	  5,       'six',
	  7,       'VIII',
	  9
	]
*/

/*
	Desafio
	Definimos uma função, mixedNumbers, na qual estamos passando o array como
	um argumento. Modifique a função usando push() e unshift() para adicionar
	'I', 2, 'three' no início do array e 7, 'VIII', 9 ao final para que o array
	retornado contenha a representação dos números de 1 a 9 em ordem.
*/

function mixedNumbers(arr) {
  // Altere apenas o código abaixo desta linha
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Altere apenas o código acima desta linha
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

/*
	[
	  'I',     2,
	  'three', 'IV',
	  5,       'six',
	  7,       'VIII',
	  9
	]
*/