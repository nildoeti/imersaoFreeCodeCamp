/*
	Extrair resultados

	Até agora, você só tem verificado se existe ou não um padrão dentro de uma
	string. Você também pode extrair os resultados encontrados por meio do
	método .match().

	Para usar o método .match(), aplique o método em uma string e passe a regex
	dentro dos parênteses.

	Exemplo:

	"Hello, World!".match(/Hello/);
	let ourStr = "Regular expressions";
	let ourRegex = /expressions/;
	ourStr.match(ourRegex);

	Aqui, o primeiro match retorna ["Hello"] e, o segundo, ["expressions"].

	Note que o método .match se usa de forma "contrária" ao método .test que
	você usou até então:

	'string'.match(/regex/);
	/regex/.test('string');

*/

// exemplo 1
let ourStr = 'Regular expressions';
let ourRegex = /regular/i;
let result = ourStr.match(ourRegex);
console.log(result);

