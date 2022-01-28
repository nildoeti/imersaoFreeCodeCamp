/*
	Validar grupos mistos de caracteres

	Há vezes em que queremos validar grupos de caracteres em uma expressão
	regular. É possível fazê-lo usando parênteses: ().

	Você pode usar a expressão regular /P(engu|umpk)in/g para encontrar tanto
	Penguin quanto Pumpkin em uma string.

	Depois é só usar o método test() para verificar se os grupos estão
	presentes na string.

	let testStr = "Pumpkin";
	let testRegex = /P(engu|umpk)in/;
	testRegex.test(testStr);

	O método test retorna true aqui.
*/

// exemplo 1
let testStr = 'Pumpkin';
let testRegex = /P(engu|umpk)in/;
console.log(testRegex.test(testStr)); // true
