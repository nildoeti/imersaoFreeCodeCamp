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

