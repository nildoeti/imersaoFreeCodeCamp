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


/*
	Concluindo...
	Usando a sintaxe de spread, acabamos de conseguir uma operação que teria
	sido mais complexa e mais extensa se tivéssemos utilizado métodos
	tradicionais.
*/


/*
	Desafio
	Definimos uma função spreadOut que retorna a variável sentence. Modifique a
	função usando o operador spread para que ele retorne o array
	['learning', 'to', 'code', 'is', 'fun'].
*/

function spreadOut() {
	let fragment = ['to', 'code'];
	// let sentence; // Alterar esta linha
	let sentence = ['learning', ...fragment, 'is, fun'];
	return sentence;
}

console.log(spreadOut()); // [ 'learning', 'to', 'code', 'is, fun' ]
