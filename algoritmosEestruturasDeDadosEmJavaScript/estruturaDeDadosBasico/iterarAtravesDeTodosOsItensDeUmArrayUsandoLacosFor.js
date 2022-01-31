/*
	Iterar através de todos os itens de um array usando laços for

	Às vezes quando trabalhando com arrays, é muito útil ser capaz de iterar
	sobre cada item para encontrar um ou mais elementos que podemos precisar,
	ou para manipular o array baseado em qual item de dados atende a
	determinados critérios. JavaScript oferece diversos métodos integrados que
	fazem iteração sobre arrays de formas ligeiramente diferentes para alcançar
	resultados diferentes (como every(), forEach(), map(), entre outros). Porém,
	a técnica mais flexível e que nos oferece a maior capacidade de controle é
	o laço for simples.

	Considere o seguinte:

	function greaterThanTen(arr) {
	  let newArr = [];
	  for (let i = 0; i < arr.length; i++) {
	    if (arr[i] > 10) {
	      newArr.push(arr[i]);
	    }
	  }
	  return newArr;
	}

	greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

	Usando o laço for, essa função itera o array, acessa cada elemento do array
	e submete-o a um teste simples que nós criamos. Dessa forma, nós
	determinamos de forma fácil e programática qual item é maior que 10, e
	retornamos um novo array, [12, 14, 80], contendo esses itens.

*/

// exemplo 1
function greaterThanTen(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 10) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

console.log(greaterThanTen([2, 12]));

/*
	Desafio
	Definimos uma função, filteredArray, a qual recebe arr, um array aninhado,
	e elem como argumentos, e retornamos um novo array. elem representa um
	elemento que pode ou não estar presente em um ou mais dos arrays aninhados
	dentro de arr. Modifique a função, usando o laço for, para retornar uma
	versão filtrada do array recebido mode que qualquer array aninhado dentro
	de arr e contendo elem seja removido.
*/
function filteredArray(arr, elem) {
	let newArr = [];
	// change code below this line

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(elem) == -1) {
			//Checks every parameter for the element and if is NOT there continues the code
			newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
		}
	}

	// change code above this line
	return newArr;
}
// change code here to test different cases:
console.log(
	filteredArray(
		[
			[3, 2, 3],
			[1, 6, 3],
			[3, 13, 26],
			[19, 3, 9],
		],
		3
	)
);