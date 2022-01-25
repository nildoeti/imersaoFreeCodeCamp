/*
	Capturar caracteres não especificados

	Até agora você aprendeu a criar classes de caracteres para capturar
	caracteres específicos, mas você também pode usá-las para capturar
	caracteres ausentes nelas. Esse tipo de classe de caracteres é chamada
	classe de caracteres negada.

	Para criar uma classe de caracteres negada, você só precisa colocar um
	acento circunflexo (^) depois do colchete de abertura e à esquerda dos
	caracteres que você quer evitar.

	Por exemplo, /[^aeiou]/gi encontra todos os caracteres que não são vogais.
	Observe que caracteres como ., !, [, @, / e espaços em branco são
	capturados - a classe de vogais negada apenas exclui os caracteres que
	são vogais.
*/

// exemplo 1
let myString = 'Capturar caracteres não especificados';
let myStringRegex = /[^aeiou]/gi;
let myStringResult = myString.match(myStringRegex);
console.log(myStringResult);

/*
	Resultado para exemplo 1
	[
	  'C', 'p', 't', 'r', 'r',
	  ' ', 'c', 'r', 'c', 't',
	  'r', 's', ' ', 'n', 'ã',
	  ' ', 's', 'p', 'c', 'f',
	  'c', 'd', 's'
	]

*/

// exemplo 2
let myStringRegex2 = /[^a-z]/gi;
let myStringResult2 = myString.match(myStringRegex2);
console.log(myStringResult2 );

/*
	Resultado para exemplo 2
	[ ' ', ' ', 'ã', ' ' ]

*/

/*
	Desafio

	Crie uma única regex que captura todos os caracteres que não são números ou
	vogais. Lembre-se de incluir as flags necessárias na regex.
*/

let quoteSample = "3 blind mice.";
// let myRegex = /change/; // Altere esta linha
// let result = myRegex; // Altere esta linha

// linhas alteradas
let myRegex = /[a-z]/gi;
let result = quoteSample.match(myRegex);
console.log(result);

/*
	Saida para o desafio do projeto
	[
	  'b', 'l', 'i',
	  'n', 'd', 'm',
	  'i', 'c', 'e'
	]
*/

