/*
	Manipular arrays com pop()

	Outra forma de alterar os dados em um array é com a função .pop().

	.pop() é usado para remover um valor do final do array. Nós podemos 
	armazenar esse valor removido atribuindo-o a uma variável. Em outras 
	palavras, .pop() remove o último elemento de um array e retorna aquele 
	elemento.

	Qualquer tipo de entrada pode ser removida de um array - numbers, strings 
	e até mesmo arrays aninhados.

	const threeArr = [1, 4, 6];
	const oneDown = threeArr.pop();
	console.log(oneDown);
	console.log(threeArr);

	O primeiro console.log exibirá o valor 6 e o segundo exibirá o valor [1, 4].

	Use a função .pop() para remover o último item de myArray e atribuir o valor 
	removido para uma nova variável, removedFromMyArray.
*/

// exemplo 1
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();

console.log(threeArr); // [ 1, 4 ]
console.log(oneDown); // 6

// exemplo 2
const myArray = [['John', 23], ['cat', 2]]
console.log(`Antes: ${myArray}`);

const removedFromMyArray = myArray.pop();
console.log(`Depois: ${removedFromMyArray}`);
