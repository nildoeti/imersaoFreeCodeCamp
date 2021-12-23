/*
	Comparar com o operador menor ou igual

	O operador menor ou igual (<=) compara os valores de dois números. Se o 
	número à esquerda for menor ou igual ao número à direita, retornará true. 
	Se o número à esquerda for maior que o número a direita, retornará false.
	Assim como o operador de igualdade, o operador de menor ou igual que 
	converte os tipos de dados.

	Exemplos

	4   <= 5
	'7' <= 7
	5   <= 5
	3   <= 2
	'8' <= 4

	Em ordem, essas expressões seriam iguais à true, true, true, false e false.
*/

const testLessOrEqual = (val) => {
	if (val <= 12) {
		return 'Smaller Than or Equal to 12';
	}
	if (val <= 24) {
		return 'Smaller Than or Equal to 24';
	}
	return 'More than 24';
}

const result = testLessOrEqual(1);
console.log(result);