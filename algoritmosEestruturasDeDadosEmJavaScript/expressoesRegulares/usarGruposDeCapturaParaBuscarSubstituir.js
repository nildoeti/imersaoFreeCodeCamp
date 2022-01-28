/*
	Usar grupos de captura para buscar e substituir

	Buscar texto é útil. É ainda mais útil quando você consegue modificar
	(ou substituir) o texto que você busca.

	Você pode buscar e substituir texto em uma string usando o
	método .replace(). O primeiro parâmetro do .replace() é o padrão regex que
	você quer procurar. O segundo parâmetro é a string que substituirá o
	resultado da busca ou uma função que fará algo com ele.

	let wrongText = "The sky is silver.";
	let silverRegex = /silver/;
	wrongText.replace(silverRegex, "blue");

	A chamada a replace aqui retorna a string The sky is blue..

	Você também pode acessar grupos de captura na string de substituição
	usando o cifrão ($).

	"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

	A chamada a replace aqui retorna a string Camp Code.
*/

// exemplo 1
let wrongText = 'The sky is silver.';
let silverRegex = /silver/;

console.log('Antes: ', wrongText); // The sky is silver.
console.log('Depois: ', wrongText.replace(silverRegex, 'blue')); // The sky is blue.

// exemplo 2
console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')); // Camp Code

/*
	Desafio
	Escreva uma regex, fixRegex, que usa três grupos de captura para procurar
	cada palavra na string one two three. Depois atualize a variável replaceText
	para trocar de one two three para three two one e atribuir o resultado à
	variável result. Certifique-se de estar utilizando grupos de captura na
	string de substituição usando o cifrão ($).
*/

let str = "one two three";
// let fixRegex = /change/; // Altere esta linha
// let replaceText = ""; // Altere esta linha

let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
console.log(result); // three two one

