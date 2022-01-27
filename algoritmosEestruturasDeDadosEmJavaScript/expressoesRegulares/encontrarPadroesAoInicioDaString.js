/*
	Encontrar padrões ao início da string

	Desafios anteriores mostraram que expressões regulares podem ser usadas
	para capturar um número de resultados. Elas também podem ser usadas para
	procurar em posições específicas de strings.

	Mais cedo você usou o circunflexo (^) em classes de caracteres para
	procurar caracteres que não devem ser capturados, como em
	[^caracteresQueNãoQueremos]. Quando usados fora de classes de caracteres, o
	circunflexo serve para buscar a partir do começo de strings.

	let firstString = "Ricky is first and can be found.";
	let firstRegex = /^Ricky/;
	firstRegex.test(firstString);
	let notFirst = "You can't find Ricky now.";
	firstRegex.test(notFirst);

	A primeira chamada a test retorna true enquanto a segunda retorna false.
*/

let firstString = 'Ricky is first and can be found';
let firstRegex = /^Ricky/gi;
let firstStringResult = firstRegex.test(firstString);
let firstStringResultTwo = firstString.match(firstRegex);

console.log(firstStringResult);true
console.log(firstStringResultTwo); // [ 'Ricky' ]


let notFirst = "You can't find Ricky now.";
let notFirstTestOne = firstRegex.test(notFirst);
console.log(notFirstTestOne); // false


let notFirstTestTwo = notFirst.match(firstRegex);
let notFirstTestThree = notFirst.match(firstRegex);

console.log(notFirstTestTwo); // null
console.log(notFirstTestThree);


/*
	Desafio
	Use o circunflexo em uma regex para encontrar Cal, mas apenas no começo da
	string rickyAndCal.
*/

let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /change/; // Altere esta linha
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result); // true
