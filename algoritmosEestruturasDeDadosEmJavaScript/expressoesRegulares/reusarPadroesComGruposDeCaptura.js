/*
	Reusar padrões com grupos de captura

	Vamos supor que você deseja encontrar a correspondência de uma palavra que
	ocorra várias vezes como abaixo.

	let repeatStr = "row row row your boat";

	Você poderia usar /row row row/, mas e se você não souber a palavra
	específica repetida? Grupos de captura podem ser usados para localizar
	substrings repetidas.

	Os grupos de captura são criados envolvendo o padrão de regex a ser
	capturado entre parênteses. Neste caso, o objetivo é capturar uma palavra
	composta de caracteres alfanuméricos para que o grupo de captura seja \w+
	entre parênteses: /(\w+)/.

	A substring correspondente ao grupo é salva em uma "variável" temporária
	que pode ser acessada dentro da mesma expressão regular usando uma barra
	invertida e o número do grupo de captura (ex.: \1). Os grupos de captura
	são automaticamente numerados pela posição de abertura de seus parênteses
	(esquerda para direita), começando em 1.

	O exemplo abaixo captura qualquer palavra que se repita três vezes,
	separada por espaços:

	let repeatRegex = /(\w+) \1 \1/;
	repeatRegex.test(repeatStr); // Returns true
	repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

*/

//  exemplo 1
let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/gi;

console.log(repeatRegex.test(repeatStr)); // Returns true
console.log(repeatStr.match(repeatRegex)); // Returns ["row row row", "row"]

/*
	Desafio
	Use grupos de captura na regex reRegex para capturar em uma string um número que aparece exatamente três vezes, separados por espaços.
*/
let repeatNum = "42 42 42";
// let reRegex = /change/; // Altere esta linha
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);

