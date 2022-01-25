/*
	Capturar letras do alfabeto

	Você viu como pode usar conjuntos de caracteres para especificar um grupo
	de caracteres para capturar. Mas você precisaria escrever muito para
	definir uma classe larga como, por exemplo, para capturar todas as letras
	do alfabeto. Felizmente há uma maneira de fazer com que elas fiquem
	pequenas e simples.

	Você pode usar um hífen (-) para definir um intervalo de caracteres para
	capturar dentro de uma classe.

	Por exemplo, para encontrar letras minúsculas de a a e, você pode
	escrever [a-e].

	let catStr = "cat";
	let batStr = "bat";
	let matStr = "mat";
	let bgRegex = /[a-e]at/;
	catStr.match(bgRegex);
	batStr.match(bgRegex);
	matStr.match(bgRegex);

	As três chamadas a match retornam, na ordem, os valores:
	["cat"], ["bat"] e null.
*/

let castStr = 'cat';
let batStr = 'bat';
let matStr = 'mat';

let bgRegex = /[a-e]a/;

let result1 = castStr.match(bgRegex);
let result2 = batStr.match(bgRegex);
let result3 = matStr.match(bgRegex);

console.log(result1);
console.log(result2);
console.log(result3);

