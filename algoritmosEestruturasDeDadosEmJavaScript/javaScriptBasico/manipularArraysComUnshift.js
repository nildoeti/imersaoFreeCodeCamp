/*
	Manipular arrays com unshift()

	Você pode não apenas usar shift para remover elementos do início de um array, 
	como também pode usar unshift para adicionar elementos ao início de um array, 
	ou seja, adicionar elementos na posição inicial do array.

	.unshift() funciona exatamente como .push(), mas, ao invés de adicionar o 
	elemento ao final do array, unshift() adiciona o elemento no início do array.

	Exemplo:

	const ourArray = ["Stimpson", "J", "cat"];
	ourArray.shift();
	ourArray.unshift("Happy");

	Após o shift, ourArray teria o valor ["J","cat"]. Após o unshift, ourArray 
	teria o valor ["Happy","J","cat"].

*/

// exemplo 1
const ourArray = ['Stimpson', 'J', 'cat'];
console.log();'\n'
console.log(`Array Atual: -> ${ourArray}`);

ourArray.shift();
console.log(`Primeiro item removido da array: -> ${ourArray}`);

ourArray.unshift('Happy');
console.log(`Novo item adicionado no inicio da list: -> ${ourArray}`);

// exemplo 2
console.log('\n')

const myArray = [['John', 23], ['dog', 3]];
console.log(`Antes => ${myArray}`);

myArray.unshift(['Paul', 35]);
console.log(`Depois =>${myArray}`);

console.log('\n');
