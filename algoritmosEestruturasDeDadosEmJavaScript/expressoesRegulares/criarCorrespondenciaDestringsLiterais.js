/*
	Criar correspondência de strings literais

	No desafio anterior, você usou a expressão regular /Hello/ para procurar a
	palavra Hello. Esta regex buscou a string Hello literalmente. No exemplo
	abaixo há outra busca literal, dessa vez pela string Kevin:

	let testStr = "Hello, my name is Kevin.";
	let testRegex = /Kevin/;
	testRegex.test(testStr);

	Essa chamada a test retornará true.

	Qualquer outra forma de escrever Kevin não funcionará. Por exemplo, a regex
	/Kevin/ não encontrará nem kevin e nem KEVIN.

	let wrongRegex = /kevin/;
	wrongRegex.test(testStr);

	test retornará false.

	Você verá como encontrar estas outras formas em alguns desafios futuros.
*/

// exemplo 1
let testStr = 'Hello, my name is Kevin.';
let testRegex = /Kevin/; // k, maiusculo
let result = testRegex.test(testStr);
console.log(result); // true

// exemplo 2
let wrongRegex2 = /kevin/; // k, minsculo
let resul2 = wrongRegex2.test(testStr);
console.log(resul2); // false


/*
	Complete a regex waldoRegex para encontrar "Waldo" na string waldoIsHiding
	de forma literal.
*/

let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
// antes
// let waldoRegex = /search/;

// depois
let waldoRegex = /Waldo/;
let result3 = waldoRegex.test(waldoIsHiding);
console.log(result3);
