/*
	Iterar através de um array com laço for

	Uma tarefa comum em JavaScript é para iterar através do conteúdo de um 
	array. Uma forma de fazer isso é com um laço for. Esse código vai exibir 
	cada elemento do array arr no console:

	const arr = [10, 9, 8, 7, 6];

	for (let i = 0; i < arr.length; i++) {
	   console.log(arr[i]);
	}

	Lembre-se de que arrays têm indexação baseada em zero, o que significa que o 
	último índice do array é de length - 1. Nossa condição para esse laço é 
	i < arr.length, que interrompe o laço quando i é igual a length. Nesse caso 
	a última iteração é i === 4, ou seja, quando i se tornar igual a 
	arr.length - 1 e exibir 6 no console. Em seguida, i aumenta para 5, e o 
	laço é interrompido porque i < arr.length é false.
*/

const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

