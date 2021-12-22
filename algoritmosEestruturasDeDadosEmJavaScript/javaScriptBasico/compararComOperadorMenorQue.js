/*
	Comparar com o operador menor que

	O operador menor que (<) compara os valores de dois números. Se o número à 
	esquerda for menos que o número à direita, retornará true. Caso contrário, 
	retorna false. Assim como o operador de igualdade, o operador menor que 
	converte os tipos de dados enquanto compara.

	Exemplos

	2   < 5
	'3' < 7
	5   < 5
	3   < 2
	'8' < 4

	Em ordem, essas expressões seriam iguais à true, true, false, false e false.

*/


const testLessThan = (val) => {
	if (val < 25) {
		return 'Under 25';
	}
	if (val < 55) {
		return 'Under 55';
	}

	return '55 or Over';
}

const result = testLessThan(-1);
console.log(result);