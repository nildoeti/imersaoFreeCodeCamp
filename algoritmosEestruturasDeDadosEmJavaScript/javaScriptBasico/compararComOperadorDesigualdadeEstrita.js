/*
	Comparar com o operador de desigualdade estrita

	O operador de desigualdade estrito (!==) é o oposto lógico do operador de 
	igualdade estrito. Significa que "não é estritamente igual" e retorna false 
	onde a igualdade estrita retornaria true e vice-versa. O operador de 
	desigualdade estrita não converterá tipos de dados.

	Exemplos

	3 !==  3
	3 !== '3'
	4 !==  3

	Em ordem, essas expressões seriam iguais à false, true e true.

*/


console.log(3 !==  3); // false
console.log(typeof(3 !==  3)); // booblean

// exemplo
const testStrictNotEqual = (val) => {
	if (val !== 17) {
		return 'Equal';
	}
	return 'Not Equal';
}

const result = testStrictNotEqual(17);
console.log(result);