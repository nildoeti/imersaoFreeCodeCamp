/*
	Iterar com laços while em JavaScript

	Você pode rodar o mesmo código várias vezes usando um laço.

	O primeiro tipo de laço que aprenderemos é chamado de laço while porque ele 
	rodará enquanto uma condição específica for verdadeira e vai parar uma vez 
	que a condição não for mais verdadeira.

	const ourArray = [];
	let i = 0;

	while (i < 5) {
	  ourArray.push(i);
	  i++;
	}

	No código de exemplo acima, o laço while executará por 5 vezes e adicionará 
	os números de 0 até 4 a ourArray.

	Vamos tentar fazer um laço while funcionar empurrando valores para um array.

*/

// exemplo 1
const ourArray = [];
let i = 0;

while (i < 5) {
	ourArray.push(i);
	i++;
}

console.log(ourArray);

// exemplo 2
const arrayIn = [];
let x = 0;

while (x < 5) {
	arrayIn.push(x);
	x++;
}

console.log(arrayIn);
