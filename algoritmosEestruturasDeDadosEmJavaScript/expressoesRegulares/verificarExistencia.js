
/*
	Verificar existência

	Haverá vezes em que você procurará padrões que podem ou não existir na
	string. Pode ser relevante validá-los dependendo da situação.

	Você pode fazer com que um padrão seja opcional ao usar uma interrogação, ?,
	depois dele. Ela valida se há uma ou nenhuma ocorrência do padrão. Pode-se
	dizer que a interrogação torna o elemento à esquerda dela opcional.

	Por exemplo, com a interrogação você pode capturar palavras em inglês
	escritas com a ortografia americana ou britânica.

	let american = "color";
	let british = "colour";
	let rainbowRegex= /colou?r/;
	rainbowRegex.test(american);
	rainbowRegex.test(british);

	Ambas as chamadas ao método test retornam true.
*/

// exemplo 1
let american = 'color';
let british = 'colour';
let rainbowRegex = /colo?r/;

console.log(rainbowRegex.test(american)); // true
console.log(rainbowRegex.test(british)); // false

