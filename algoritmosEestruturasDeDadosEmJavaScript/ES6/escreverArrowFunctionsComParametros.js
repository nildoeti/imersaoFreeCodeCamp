/*
	Escrever arrow functions com parâmetros

	Assim como uma função normal, você pode passar argumentos para uma arrow 
	function.

	const doubler = (item) => item * 2;
	doubler(4);

	doubler(4) retornaria o valor 8.

	Se uma arrow function tiver um único parâmetro, os parênteses envolvendo o 
	parâmetro podem ser omitidos.

	const doubler = item => item * 2;

	É possível passar mais de um argumento para uma arrow function.

	const multiplier = (item, multi) => item * multi;
	multiplier(4, 2);

	multiplier(4, 2) retornaria o valor 8.
*/

// exemplo 1
// passar argumentos para uma arrow function.
// const doubler = (item) => item * 2;
// const p1 = doubler(4);
// console.log(p1); // 8

// exemplo 2
// os parênteses envolvendo arrow function com um único parâmetro,  
// podem ser omitidos.
// const doubler = item => item * 4;
// const result = doubler(5);
// console.log(result); // 20

/*
	Reescreva a função myConcat que anexa conteúdo de arr2 para arr1 para que a 
	função use sintaxe de arrow function.
*/

// var myConcat = function (arr1, arr2) {
// 	return arr1.concat(arr2); 
// }
// console.log(myConcat([1,2], [3, 4, 5]));

var myConcat = (arr1, arr2) => {
	return arr1.concat(arr2);
}

console.log(myConcat([1, 2], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
