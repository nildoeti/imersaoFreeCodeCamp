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

// exemplo 2 para array
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
// Espalhamento em objetos literais
let obj1 = { nome: "Fulano", sobreNome: " de Tal" };
let obj2 = { nome: "Beltrano", sobreNome: " de Tal" };

cloneObj1 = { ...obj1 };
console.log(cloneObj1); // { nome: 'Fulano', sobreNome: ' de Tal' }

let cloneObj1Obj2 = { ...obj1, obj2 };
console.log(cloneObj1Obj2);
/*
	Exemplo de saida para cloneObj1Obj2
	{
	  nome: 'Fulano',
	  sobreNome: ' de Tal',
	  obj2: { nome: 'Beltrano', sobreNome: ' de Tal' }
	}

*/

/*
	Desafio

	Definimos uma função, copyMachine que recebe arr (um array) e num (um
	número) como argumentos. A função deve retornar um novo array composto de
	num cópias de arr. Fizemos a maior parte do trabalho para você, mas isso
	ainda não está certo. Modifique a função usando a sintaxe de spread para
	que ela funcione corretamente (dica: outro método já mencionado pode ser
	útil aqui!).
*/

function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
		// Altere apenas o código abaixo desta linha
		newArr.push([...arr]);
		// Altere apenas o código acima desta linha
		num--;
	}
	return newArr;
}

console.log(copyMachine([true, false, true], 2)); // [ [ true, false, true ], [ true, false, true ] ]