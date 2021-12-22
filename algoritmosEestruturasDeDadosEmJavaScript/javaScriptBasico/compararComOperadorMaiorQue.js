/*
	Comparar com o operador maior que

	O operador maior que (>) compara os valores de dois números. Se o número à 
	esquerda for maior que o número à direita, ele retorna true. Caso contrário, 
	ele retorna false.

	Tal como o operador de igualdade, o operador maior que converterá os tipos 
	de dados de valores enquanto compara.

	Exemplos

	5   >  3
	7   > '3'
	2   >  3
	'1' >  9

	Em ordem, essas expressões seriam iguais à true, true, false e false.

*/

const testGreaterThan = (val) => {
	if (val > 100) {
		return 'Over 100'
	} if (val > 10) {
		return '10 or Under'
	}
}

const result = testGreaterThan(101)
console.log(result);