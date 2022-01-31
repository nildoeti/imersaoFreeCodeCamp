/*
	Verificar a presença de um elemento com indexOf()

	Já que arrays podem ser alterados, ou mutados, a qualquer momento, não há
	garantia de onde um dado estará em um determinado array, ou se esse
	elemento sequer existe. Felizmente, o JavaScript nos fornece outro método
	integrado, indexOf(), que nos permite rapidamente e facilmente checar pela
	presença de um elemento em um array. indexOf() recebe um elemento como
	parâmetro, e quando chamado, retorna a posição, ou índice, daquele elemento,
	ou -1 se o elemento não existe no array.

	Por exemplo:

	let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

	fruits.indexOf('dates');
	fruits.indexOf('oranges');
	fruits.indexOf('pears');

	indexOf('dates') retorna -1, indexOf('oranges') retorna 2 e indexOf('pears')
	retorna 1 (o primeiro índice no qual cada elemento existe).

*/

// exemplo 1
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

console.log(fruits.indexOf('dates')); // -1
console.log(fruits.indexOf('oranges')); // 2
console.log(fruits.indexOf('pears')); // 1
