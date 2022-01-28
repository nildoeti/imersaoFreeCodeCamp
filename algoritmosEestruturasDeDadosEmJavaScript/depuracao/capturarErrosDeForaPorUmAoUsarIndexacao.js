/*
	Capturar erros de fora por um ao usar a indexação

	Off by one errors (erros de fora por um) (as vezes chamados de OBOE) surgem
	quando você está tentando acessar um índice específico de uma string ou
	array (para fatiar ou acessar um segmento), ou quando você está iterando
	sobre seus índices. A indexação de JavaScript começa em zero e não um, o
	que significa que o último índice sempre será o tamanho do item menos 1
	(array.length - 1). Se você estiver tentando acessar um índice igual ao
	tamanho, o programa pode lançar uma referência do erro "index out of range"
	ou imprimir undefined.

	Quando você usa métodos de string ou array que recebem intervalos de
	índices como argumentos, auxilia ler a documentação e compreender se eles
	são inclusivos (o item no índice especificado é parte do que é retornado)
	ou não. Aqui estão alguns exemplos de erros de fora por um:

	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let len = alphabet.length;
	for (let i = 0; i <= len; i++) {
	  console.log(alphabet[i]);
	}
	for (let j = 1; j < len; j++) {
	  console.log(alphabet[j]);
	}
	for (let k = 0; k < len; k++) {
	  console.log(alphabet[k]);
	}

	O primeiro exemplo itera uma vez a mais (i <= len) e o segundo itera uma
	vez a menos por começar do índice 1 (let j = 1). O terceiro exemplo está
	certo.
*/


// alguns exemplos de erros de fora por um
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
// 	console.log(alphabet[i]);
// }
// for (let j = 1; j < len; j++) {
// 	console.log(alphabet[j]);
// }

// forma correta
for (let k = 0; k < len; k++) {
	console.log(alphabet[k]);
}



/*
	Desafio

	Corrija os dois erros de índices nas funções seguintes para que todos os
	números de 1 até 5 sejam exibidos no console.
*/

// Antes
// function countToFive() {
//   let firstFive = "12345";
//   let len = firstFive.length;
//   // Altere apenas o código abaixo desta linha
//   for (let i = 1; i <= len; i++) {
//   // Altere apenas o código acima desta linha
//     console.log(firstFive[i]);
//   }
// }

// countToFive();


// Depois
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Altere apenas o código abaixo desta linha
  for (let i = 0; i < len; i++) {
  // Altere apenas o código acima desta linha
    console.log(firstFive[i]);
  }
}

countToFive();
