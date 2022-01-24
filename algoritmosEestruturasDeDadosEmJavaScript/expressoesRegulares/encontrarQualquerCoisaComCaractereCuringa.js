/*
	Encontrar qualquer coisa com o caractere curinga

	Haverá vezes em que você não saberá (ou não precisará saber) quais
	caracteres exatamente farão parte das suas regexes. Pensar em todas as
	palavras que capturariam, digamos, um erro ortográfico levaria muito tempo.
	Por sorte, você pode economizar tempo usando o caractere curinga: .

	O caractere curinga . captura qualquer caractere. O curinga também pode ser
	chamado de ponto. Você pode usar o curinga como qualquer outro caractere na
	regex. Por exemplo, se você quiser encontrar hug, huh, hut ou hum, você pode
	usar a regex /hu./ para capturar todas as quatro palavras.

	let humStr = "I'll hum a song";
	let hugStr = "Bear hug";
	let huRegex = /hu./;
	huRegex.test(humStr);
	huRegex.test(hugStr);

	As duas chamadas a test retornam true.
*/

// caractere curinga
let humStr = "I'll hum a song";
let hugStr = 'Bear hug';

let huRegex = /hu./;

const result1 = huRegex.test(humStr);
const result2 = huRegex.test(hugStr);

console.log(result1); // true
console.log(result2); // true


/*
	Complete a regex unRegex para que ela encontre as strings
	run, sun, fun, pun, nun e bun.
	A regex deve usar o caractere curinga.
*/

let exempleStr = "Let's have fun with regular expressions!";
let unRegex2 = /un./;

const result3 = unRegex2.test(exempleStr);
console.log(result3); // true
