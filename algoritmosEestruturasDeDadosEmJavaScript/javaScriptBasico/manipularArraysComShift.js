/*
	Manipular arrays com shift()

	pop() sempre remove o último elemento de um array. E se você quiser remover 
	o primeiro?

	É aí que o .shift() vem a ser útil. Ele funciona da mesma forma que .pop(), 
	exceto que ele remove o primeiro elemento ao invés do último.

	Exemplo:

	const ourArray = ["Stimpson", "J", ["cat"]];
	const removedFromOurArray = ourArray.shift();

	removedFromOurArray teria o valor da string Stimpson e ourArray teria o 
	valor de ["J", ["cat"]].

	Use a função .shift() para remover o primeiro item de myArray e atribuir o 
	valor removido para uma nova variável, removedFromMyArray.

*/

// exemplo 1
const ourArray = ['Stimpson', 'J', ['cat']];
console.log(`Antes: ${ourArray}`);

const removedFromMyArray = ourArray.shift();
console.log(`Depois: ${ourArray}`);
console.log(`Valor removido: ${removedFromMyArray}`);

// exemplo 2
console.log('\n...\n');

const myArray = [['John', 23], ['dog', 3]];
console.log(`Antes: ${myArray}`);

const removedFromMyArray2 = myArray.shift();
console.log(`Depois: ${myArray}`);
console.log(`Valor removido: ${removedFromMyArray2}`);