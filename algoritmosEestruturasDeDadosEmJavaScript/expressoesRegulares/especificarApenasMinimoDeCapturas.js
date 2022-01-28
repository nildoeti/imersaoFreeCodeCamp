/*
	Especificar apenas o mínimo de capturas

	Você pode especificar um número mínimo e um máximo de capturas com chaves.
	Haverá vezes que você precisará especificar um mínimo mas não um máximo.

	Para fazer isso, apenas escreva o número seguido de uma vírgula dentro das
	chaves.

	Por exemplo, para capturar pelo menos 3 vezes a letra a na string hah você
	pode escrever a regex /ha{3,}h/.

	let A4 = "haaaah";
	let A2 = "haah";
	let A100 = "h" + "a".repeat(100) + "h";
	let multipleA = /ha{3,}h/;
	multipleA.test(A4);
	multipleA.test(A2);
	multipleA.test(A100);

	As três chamadas a test acima retornam, na ordem, os valores: true, false e
	true.

*/

// exemplo 1
let A4 = 'haaaah';
let A2 = 'haah';
let A100 = 'h' + 'a'.repeat(100) + 'h';
let multipleA = /ha{3,}h/g; // especificar um mínimo mas não um máximo

console.log(multipleA.test(A2)); // false
console.log(multipleA.test(A4)); // true
console.log(multipleA.test(A100)); // false


// exemplo 2
let myText = 'bahhhh!';
let myRegex = /a{2,}h/;
let myTextResult = myRegex.test(myText);
let myTextResultTwo = myText.match(myRegex);

console.log(myTextResult);
console.log(myTextResultTwo);


/*
	Desafio
	Modifique a regex haRegex para que capture quatro ou mais zs na string 
	Hazzah.
*/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Altere esta linha
let result = haRegex.test(haStr);
console.log(result); // true
