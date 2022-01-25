/*
	Capturar números e letras do alfabeto

	O uso do hífen (-) para capturar um intervalo de caracteres não é limitado
	a letras. Ele também funciona para capturar intervalos de números.

	Por exemplo, /[0-5]/ encontra qualquer número entre 0 e 5, incluindo ambos
	0 e 5.

	E também é possível combinar intervalos de letras e números em uma única
	classe de caracteres.

	let jennyStr = "Jenny8675309";
	let myRegex = /[a-z0-9]/ig;
	jennyStr.match(myRegex);

*/

// exemplo 1
let jennyStr = 'Jenny8675309';
let myRegex = /[a-z0-0]ig/;
let resultJenny = jennyStr.match(myRegex);
console.log(resultJenny);

// exemplo 2
let user01 = 'WebStacl008';
let user01Regex = /[a-z0-9]gi/;
let user01Result = user01.match(user01Regex);
console.log(user01Result);

/*
	Escreva uma única regex que encontra letras entre h e s e, também, números
	entre 2 e 6. Lembre-se de incluir as flags necessárias na regex.
*/

let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /change/; // Altere esta linha
// let result = myRegex; // Altere esta linha

let myRegex2 = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex2);
console.log(result);