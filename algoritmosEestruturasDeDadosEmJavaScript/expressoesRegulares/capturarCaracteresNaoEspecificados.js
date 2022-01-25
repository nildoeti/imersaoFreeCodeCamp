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


