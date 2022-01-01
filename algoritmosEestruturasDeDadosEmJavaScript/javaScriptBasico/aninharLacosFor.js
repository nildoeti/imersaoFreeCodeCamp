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

const arr = [
	[1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			console.log(arr[i][j]);
	}
}
