/*
	Combinar arrays com o operador spread

	Outra grande vantagem do operador spread é a capacidade de combinar arrays,
	ou de inserir todos os elementos de um array em outro, em qualquer índice.
	Com sintaxe mais tradicional, podemos concatenar arrays, mas isso só nos
	permite combinar arrays no final de um e no início de outro. A sintaxe do
	spread torna a seguinte operação extremamente simples:

	let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

	let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

	thatArray teria o valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley',
	'thyme', 'coriander'].
*/

// exemplo 1
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
console.log(thisArray); // [ 'sage', 'rosemary', 'parsley', 'thyme' ]



let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

console.log(thatArray);
/*
	Saida oara thatArray:
	[
	  'basil',
	  'cilantro',
	  'sage',
	  'rosemary',
	  'parsley',
	  'thyme',
	  'coriander'
	]
*/


