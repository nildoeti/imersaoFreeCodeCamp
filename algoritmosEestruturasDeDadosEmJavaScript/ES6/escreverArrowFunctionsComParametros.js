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
const doubler = (item) => item * 2;
const p1 = doubler(4);
console.log(p1); // 8
