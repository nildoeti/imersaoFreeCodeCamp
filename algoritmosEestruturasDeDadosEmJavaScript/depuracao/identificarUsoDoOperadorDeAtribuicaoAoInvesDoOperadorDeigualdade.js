/*
	Identificar uso do operador de atribuição ao invés do operador de igualdade

	Programas de ramificação, ou seja, programas que fazem coisas diferentes se
	certas condições forem atendidas, dependem de instruções i, else if e else
	em JavaScript. Às vezes a condição verifica se um resultado é igual a umvalor.

	Essa lógica é dita da seguinte forma: "se x for igual a y, então ..." o que
	pode literalmente ser traduzido para código usando o =, ou operador de
	atribuição. Isso leva a um controle de fluxo inesperado no seu programa.

	Como abordado nos desafios anteriores, o operador de atribuição (=) em
	JavaScript, atribui um valor para o nome de uma variável. E os operadores
	== e === verificam pela igualdade (o triplo === testa por igualdade estrita,
	significando que ambos os valores e o tipo de dado são os mesmos).

	O código abaixo atribui o valor 2 para x, o que tem como resultado true.
	Quase todo valor por si só em JavaScript é avaliado como true, exceto os
	que são conhecidos como valores "falsy": false, 0, "" (uma string vazia),
	NaN, undefined e null.

	let x = 1;
	let y = 2;
	if (x = y) {

	} else {

	}

	Nesse exemplo, o bloco de código dentro da instrução if vai rodar para
	qualquer valor de y, a não ser que y seja falso. O bloco de else, que nós
	esperamos que seja executado aqui, não vai rodar de fato.

*/

// exempplo 1
// let x = 1;
// let y = 2;
// if (x = y) {
// 	console.log(true); // true
// } else {
// 	console.log(false);
// }

/*
	Desafio
	Corrija a condição para que o programa rode na ramificação correta e o
	valor apropriado seja atribuído a result.
*/

// antes
// let x = 7;
// let y = 9;
// let result = "to come";

// if(x = y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);

// depois
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
