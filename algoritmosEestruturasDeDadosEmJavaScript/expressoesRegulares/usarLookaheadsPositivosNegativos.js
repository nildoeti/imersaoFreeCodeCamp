/*
	Usar lookaheads positivos e negativos

	Lookaheads ("olhar à frente") são padrões que dizem ao JavaScript para
	procurar outros padrões ao longo da string sem capturá-los. Eles podem ser
	úteis quando é necessário fazer diversas verificações na mesma string.

	Existem dois tipos de lookahead: o lookahead positivo e o lookahead
	negativo.

	Lookaheads positivos garantem que o padrão especificado se encontra à
	frente, mas não o capturam. Usa-se (?=...), onde ... é o padrão a ser
	procurado, para escrever lookaheads positivos.

	Lookaheads negativos, por outro lado, garantem que o padrão especificado
	não se encontra à sua frente na string. Para usar lookaheads negativos,
	escrevemos (?!...) onde ... é o padrão que você quer ter certeza que não
	está lá. O restante do padrão é validado se o padrão do lookahead negativo
	estiver ausente.

	É fácil se confundir com lookaheads, mas uns exemplos podem ajudar.

	let quit = "qu";
	let noquit = "qt";
	let quRegex= /q(?=u)/;
	let qRegex = /q(?!u)/;
	quit.match(quRegex);
	noquit.match(qRegex);

	As duas chamadas a match retornam ["q"].

	Validar dois padrões diferentes em uma string é considerado um uso mais
	prático de lookaheads. Neste não tão aprimorado validador de senhas, os
	lookaheads procuram por 3 a 6 caracteres e pelo menos um número,
	respectivamente, na string:

	let password = "abc123";
	let checkPass = /(?=\w{3,6})(?=\D*\d)/;
	checkPass.test(password);

*/

// exemplo 1
let quit = 'qu';
let noquit = 'qt';

let quRegex = /q(?=u)/gi; // lookaheads positivos
let qRegex = /q(?!u)/gi; // lookaheads negativos

console.log(quit.match(quRegex)); // q
console.log(noquit.match(quRegex)); // null

console.log(quit.match(qRegex)); // null
console.log(noquit.match(qRegex)); // q



// exemplo 2 validar caracteres
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let passwordResult = checkPass.test(password);
console.log(passwordResult); // true


/*
	Desafio
	Use os lookaheads na pwRegex para que correspondam a senhas de mais de 5
	caracteres e que tenham dois algarismos consecutivos.
*/
let sampleWord = "astronaut";
// let pwRegex = /change/; // Altere esta linha
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result); // false

