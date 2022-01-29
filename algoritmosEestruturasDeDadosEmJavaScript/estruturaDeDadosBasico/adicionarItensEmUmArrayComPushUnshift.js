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
