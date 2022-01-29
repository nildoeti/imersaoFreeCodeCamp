/*
	Remover itens de um array com pop() e shift()

	Tanto push() e unshift() possuem métodos correspondentes que são quase
	opostos funcionais: pop() e shift(). Como você já pode ter adivinhado, em
	vez de adicionar, pop() remove um elemento do fim de um array, enquanto
	shift() remove um elemento do início. A diferença chave entre pop() e
	shift() e seus primos push() e unshift(), é que nenhum dos métodos recebe
	parâmetros. Cada um deles só permite que seja modificado um elemento por
	vez em um array.

	Vamos dar uma olhada:

	let greetings = ['whats up?', 'hello', 'see ya!'];

	greetings.pop();

	greetings teria o valor ['whats up?', 'hello'].

	greetings.shift();

	greetings teria o valor ['hello'].

	Nós também podemos retornar o valor do elemento removido com qualquer
	método dessa forma:

	let popped = greetings.pop();

	greetings teria o valor [] e popped teria o valor hello.

*/

// exemplo 1 pop()
let greetings = ['whats up?', 'hello', 'see ya!'];
console.log('Antes: ', greetings); // Antes:  [ 'whats up?', 'hello', 'see ya!' ]

greetings.pop();
console.log('Depois: ', greetings); // Depois:  [ 'whats up?', 'hello' ]

let popped = greetings.pop();
console.log(popped); // hello
console.log(greetings); // [ 'whats up?' ]

// exemplo 2 shift
greetings.shift();
console.log(greetings); // []



/*
	Desafio
	Nós definimos uma função, popShift, a qual recebe um array como argumento e
	retorna um novo array. Modifique a função, usando pop() e shift(), para
	remover o primeiro e o último elemento do array passado como argumento, e
	atribua os valores removidos para suas variáveis correspondentes, para que
	o array retornado contenha seus valores.
*/

function popShift(arr) {
	// let popped; // Altere esta linha
	// let shifted; // Altere esta linha

	let popped = arr.pop();
	let shifted = arr.shift();

	return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
