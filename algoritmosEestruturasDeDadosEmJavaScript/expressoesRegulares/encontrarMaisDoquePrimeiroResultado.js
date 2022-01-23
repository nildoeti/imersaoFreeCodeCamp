/*
	Encontrar mais do que o primeiro resultado

	Até agora você foi capaz apenas de extrair ou buscar um resultado de uma
	vez.

	let testStr = "Repeat, Repeat, Repeat";
	let ourRegex = /Repeat/;
	testStr.match(ourRegex);

	match retorna ["Repeat"] aqui.

	Para buscar ou extrair um padrão além do primeiro resultado, você pode usar
	a flag g (de "global").

	let repeatRegex = /Repeat/g;
	testStr.match(repeatRegex);

	Aqui, match retorna o valor ["Repeat", "Repeat", "Repeat"]
*/

// buscar um resultado de uma vez
let testStr = 'Repeat, Repeat, Repeat';
let ourRegex = /Repeat/;
let result = testStr.match(ourRegex);
console.log(result);

// Encontrar mais de um resultado
let repeatRegex = /Repeat/g; // pega todos os resultados
let result2 = testStr.match(repeatRegex);
console.log(result2);
