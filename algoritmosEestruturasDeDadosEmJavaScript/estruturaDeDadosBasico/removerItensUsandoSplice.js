/*
	Remover itens usando splice()

	Pois bem. Aprendemos como remover elementos do início e do fim de arrays
	usando shift() e pop(), mas e se quisermos remover um elemento de algum
	lugar do meio? Ou remover mais de um elemento de uma vez? Bem, é aí que
	splice() pode ser útil. splice() nos permite fazer isso: remover qualquer
	número de elementos consecutivos de qualquer lugar no array.

	splice pode receber 3 parâmetros, mas por agora, nós focaremos apenas nos 2
	primeiros. Os dois primeiros parâmetros de splice() são inteiros que
	representam índices, ou posições, do array do qual o método splice() está
	sendo chamado. Lembre-se: arrays são indexados a zero. Então, para indicar
	o primeiro elemento do array, usaríamos 0. O primeiro parâmetro de splice()
	representa o índice no array do qual começar a remover elementos, enquanto
	o segundo parâmetro indica o número de elementos a serem removidos. Por
	exemplo:

	let array = ['today', 'was', 'not', 'so', 'great'];

	array.splice(2, 2);

	Aqui, nós removemos 2 elementos, começando com o terceiro elemento
	(no índice 2). array teria o valor ['today', 'was', 'great'].

	splice() não apenas modifica o array do qual está sendo chamado, mas
	também retorna um novo array contendo os valores dos elementos removidos:

	let array = ['I', 'am', 'feeling', 'really', 'happy'];

	let newArray = array.splice(3, 2);

	newArray tem o valor ['really', 'happy'].

*/

// exemplo 1
let array = ['today', 'was', 'not', 'so', 'great'];
console.log('Antes: ', array); // Antes:  [ 'today', 'was', 'not', 'so', 'great' ]

// array.splice(2, 2);
// console.log(array); // [ 'today', 'was', 'great' ]

let newArray = array.splice(3, 2);
console.log(newArray); // [ 'so', 'great' ]

