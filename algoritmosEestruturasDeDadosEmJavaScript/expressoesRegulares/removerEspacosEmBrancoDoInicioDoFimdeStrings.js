/*
	Remover espaços em branco do início e do fim de strings
	Às vezes, strings têm espaços em branco indesejados em seus inícios e fins.
	Uma operação muito comum de strings é remover esses espaços ao redor delas.

	Escreva uma regex que, junto dos métodos apropriados de string, remove os
	espaços em branco do começo e do fim delas.

	Observação: normalmente, usaríamos String.prototype.trim() para isso, mas a
	sua tarefa é fazer o mesmo usando expressões regulares.

*/



let hello = "   Hello, World!  ";
// let wsRegex = /change/; // Altere esta linha
// let result = hello; // Altere esta linha

let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
console.log(result); // Hello, World!

