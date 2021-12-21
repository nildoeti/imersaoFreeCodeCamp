
/*
	O operador de desigualdade (!=) é o oposto do operador de igualdade. 
	Significa que não é igual e retorna false onde a igualdade retornaria 
	true e vice-versa. Tal como o operador de igualdade, o operador de 
	desigualdade converterá os tipos de dados de valores enquanto compara.

	Exemplos

	1 !=  2
	1 != "1"
	1 != '1'
	1 != true
	0 != false

	Em ordem, essas expressões seriam iguais à true, false, false, false e 
	false.

*/


console.log(typeof(1 != '1'));
console.log(typeof('2'));




const testNotEqual = (val) => {
	if (val =! 99) {
		return 'Equal';
	}
	return 'Not Equal';
}

const resul = testNotEqual(10);
console.log(resul);