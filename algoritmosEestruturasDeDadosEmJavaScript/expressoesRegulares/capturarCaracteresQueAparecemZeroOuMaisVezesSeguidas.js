
// Capturar caracteres que aparecem zero ou mais vezes seguidas

// O último desafio fez uso do caractere + para buscar caracteres que ocorrem
// uma ou mais vezes. Existe um outro caractere que permite buscar zero ou
// mais ocorrências de um padrão.

// O caractere usado para isso é o asterisco: *.
// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);

// As três chamadas a match retornam, na ordem, os valores: ["goooooooo"], ["g"] e null.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";

let goRegex = /[go*]/gi;

let result1 = soccerWord.match(goRegex);
let result2 = gPhrase.match(goRegex);
let result3 = oPhrase.match(goRegex);

console.log(result1);

/*
	[
	  'g', 'o', 'o',
	  'o', 'o', 'o',
	  'o', 'o', 'o'
	]
*/
console.log(result2); // [ 'g', 'g' ]

console.log(result3); // [ 'o', 'o', 'o' ]


