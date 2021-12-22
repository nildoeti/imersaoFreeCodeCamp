/*
	Comparar com o operador maior ou igual

	O operador maior ou igual que (>=) compara os valores de dois números. Se o 
	número à esquerda é maior ou igual ao número à direita, ele retorna true. 
	Caso contrário, ele retornará false.

	Tal como o operador de igualdade, o operador maior que converterá os tipos 
	de dados de valores enquanto compara.

	Exemplos

	6   >=  6
	7   >= '3'
	2   >=  3
	'7' >=  9

	Em ordem, essas expressões seriam iguais à true, true, false e false.

*/


const testGreaterOrEqual = (eval) => {
	if (eval >= 20) {
		return '20 or Over';
	}
	if (eval >= 10) {
		return '10 or Over';
	}
	return 'Less than 10';
}

const result = testGreaterOrEqual(20);
console.log(result);