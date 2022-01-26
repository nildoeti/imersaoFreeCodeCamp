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

// exemplo 3
let myString2 = 'multilaser';
let myRegex3 = /t[a-z]*i/;
let result3 = myString2.match(myRegex3);
console.log(result3); // ti

// exemplo 4
let myRegex4 = /t[a-z]*?i/;
let result4 = myString2.match(myRegex4);
console.log(result4); // ti


/*
	Desafio

	Arrume a regex /<.*>/ para que retorne a tag HTML <h1> mas não a linha
	"<h1>Winter is coming</h1>". Lembre-se de que o caractere curinga . em uma
	expressão regular captura qualquer caractere.
*/

let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/; // Altere esta linha
let myRegex5 = /<.*?>/gi;
let result5 = text.match(myRegex5);
console.log(result5); // [ '<h1>', '</h1>' ]


