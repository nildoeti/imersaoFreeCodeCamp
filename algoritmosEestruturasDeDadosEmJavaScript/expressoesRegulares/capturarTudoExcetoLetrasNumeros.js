/*
	apturar tudo exceto letras e números

	Você aprendeu que você pode usar um atalho para capturar alfanuméricos
	[A-Za-z0-9_] usando \w. Você pode querer capturar exatamente o oposto disso.

	Você pode capturar não alfanuméricos usando \W ao invés de \w. Observe que
	o atalho usa uma maiúscula. Este atalho é o mesmo que escrever
	[^A-Za-z0-9_].

	let shortHand = /\W/;
	let numbers = "42%";
	let sentence = "Coding!";
	numbers.match(shortHand);
	sentence.match(shortHand);

	A primeira chamada a match retorna ["%"] enquanto o segundo retorna ["!"].

*/

// exemplo 1
let shortHand = /\W/g;
let numbers = '42%';
let numbersTwo = '42';
let sentence = 'Coding!';

console.log(numbers.match(shortHand)); // [ '%' ]
console.log(numbersTwo.match(shortHand)); // null
console.log(sentence.match(shortHand)); // [ '!' ]


/*
	Desafio
	Use o atalho \W para contar o número de caracteres não alfanuméricos em
	várias strings.
*/

let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /change/; // Altere esta linha
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);
