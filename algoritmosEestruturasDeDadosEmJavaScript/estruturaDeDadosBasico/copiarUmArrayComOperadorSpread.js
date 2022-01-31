/*
	Copiar um array com o operador spread

	Enquanto slice() nos permite sermos seletivos sobre quais elementos de um
	array copiar, entre várias outras tarefas úteis, o novo operador spread do
	ES6 nos permite facilmente copiar todos os elementos de um array, em ordem,
	com uma sintaxe simples e altamente legível. A sintaxe de spread é
	simplesmente essa: ...

	Na prática, podemos usar o operador "spread" para copiar um array assim:

	let thisArray = [true, true, undefined, false, null];
	let thatArray = [...thisArray];

	thatArray é igual a [true, true, undefined, false, null]. thisArray
	permanece inalterado e thatArray contém os mesmos elementos que thisArray.
*/

// exemplo 1
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

console.log(thatArray);

// exemplo 2
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 0];

let ourArray = [...arr1, ...arr2];
console.log(ourArray);
/*
	Saida para o exemplo 2
	[
	  1, 2, 3, 4, 5,
	  6, 7, 8, 9, 0
	]
*/
