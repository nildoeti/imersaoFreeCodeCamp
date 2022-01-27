/*
	Capturar tudo exceto números

	O último desafio mostrou como procurar dígitos usando o atalho \d com um d
	minúsculo. Você também pode procurar não dígitos usando um atalho
	semelhante que usa um D maiúsculo.

	O atalho para procurar não dígitos é \D. Esse atalho é o mesmo que [^0-9],
	que serve para procurar qualquer caractere que não seja um dígito de zero a
	nove.
*/

// exemplo 1
let myString = 'year 2001';
let myRegex = /\D/g;

console.log(myString.match(myRegex)); // [ 'y', 'e', 'a', 'r', ' ' ]
