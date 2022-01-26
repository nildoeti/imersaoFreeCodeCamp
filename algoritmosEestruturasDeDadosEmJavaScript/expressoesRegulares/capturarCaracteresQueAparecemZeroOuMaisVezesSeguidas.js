
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


/*
	Neste desafio, a string chewieQuote recebeu o valor Aaaaaaaaaaaaaaaarrrgh!
	por trás dos panos. Escreva uma regex, chewieRegex, que usa o caractere *
	para capturar um A maiúsculo seguido imediatamente de zero ou mais a
	minúsculos em chewieQuote. A regex não precisa de flags ou de classes de
	caracteres. Ela também não deve capturar nenhuma outra parte da string.
*/

// Altere apenas o código abaixo desta linha
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /change/; // Altere esta linha
let chewieRegex = /Aa*/gi; // Linha alterada
// Altere apenas o código acima desta linha

let result4 = chewieQuote.match(chewieRegex);
console.log(result4); // [ 'Aaaaaaaaaaaaaaaa' ]

