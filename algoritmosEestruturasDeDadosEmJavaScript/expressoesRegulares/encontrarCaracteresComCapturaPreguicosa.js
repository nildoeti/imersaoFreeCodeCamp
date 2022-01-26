/*
	Encontrar caracteres com captura preguiçosa

	Em expressões regulares, uma captura gananciosa encontra a parte mais
	longa o possível de uma string em que a regex atua e a retorna como
	resultado. A alternativa se chama captura preguiçosa e ela encontra o menor
	pedaço o possível de uma string que satisfaz a regex.

	Você pode aplicar a regex /t[a-z]*i/ à string "titanic". Essa regex é
	basicamente um padrão que começa com t, termina com ie tem algumas letras
	no meio delas.

	Expressões regulares são gananciosas por padrão, então o resultado seria
	["titani"]. Ou seja, a maior string o possível que atende ao padrão é
	encontrada.

	Mas você pode usar o caractere ? para torná-la preguiçosa. Aplicar a regex
	adaptada /t[a-z]*?i/ à string "titanic" retorna ["ti"].

	Observação: ler HTML com expressões regulares deve ser evitado, mas
	procurar uma string HTML usando expressões regulares é perfeitamente
	aceitável.
*/

// exemplo 1
let myString = 'titanic';

let myRegex1 = /t[a-z]*i/;
let result1 = myString.match(myRegex1);
console.log(result1); // titani

// exemplo 2
let myRegex2 = /t[a-z]*?i/;
let result2 = myString.match(myRegex2);
console.log(result2); // ti
