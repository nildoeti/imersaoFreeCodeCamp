/*
	Iterar números ímpares com um laço for

	Laços for não tem de iterar um de cada vez. Ao alterar nossa 
	final-expression, nós podemos contar os números pares.

	Começaremos em i = 0 e um laço while i < 10. Incrementaremos i em 2 a cada 
	iteração com i += 2.

	const ourArray = [];

	for (let i = 0; i < 10; i += 2) {
	  ourArray.push(i);
	}

	ourArray agora conterá [0, 2, 4, 6, 8]. Vamos mudar nossa initialization 
	para que possamos contar por números ímpares.

*/

// exemplo 1
const ourArray = [];
for (let i = 0; i < 10; i+= 2) {
	ourArray.push(i);
}

console.log(ourArray);

/*
	Desafio
	Adicione (push) os números ímpares de 9 até 1 para myArray usando um laço for.
*/

const myArray = [];
for (let i = 1; i <= 10; i+= 2) {
	myArray.push(i);
} 
console.log(myArray);
