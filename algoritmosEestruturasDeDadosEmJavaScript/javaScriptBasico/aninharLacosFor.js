/*
	Aninhar laços for

	Se você possui um array multidimensional, você pode usar a mesma lógica no 
	ponto de passagem anterior para iterar através de arrays e de qualquer 
	sub-array. Exemplo:

	const arr = [
	  [1, 2], [3, 4], [5, 6]
	];

	for (let i = 0; i < arr.length; i++) {
	  for (let j = 0; j < arr[i].length; j++) {
	    console.log(arr[i][j]);
	  }
	}

	Isso exibe no console cada subelemento dentro de arr, um de cada vez. Note 
	que para o laço interno, nós estamos verificando a propriedade
	.length de arr[i], desde que arr[i] também seja um array.
*/

// const arr = [
// 	[1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr[i].length; j++) {
// 			console.log(arr[i][j]);
// 	}
// }

/*
	Desafio

	Modifique a função multiplyAll para que retorne o produto de todos os 
	números nos sub-arrays de arr.
*/

// exemplo 1
function multiplyAll(arr) {
	let product = 1;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			product = product * arr[i][j];
		}
	}

	return product;
}

let result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result);

// exemplo 2
let myArray = (val) => {
	let multiply = 1;

	for (let x = 0; x < val.length; x++) {
		for (let y = 0; y < val[x].length; y++) {
			multiply *= val[x][y];
		}
	}

	return multiply;
}

let result2 = myArray([[2, 3], [4, 5], 6, 7]);
console.log(result2);