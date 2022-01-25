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
