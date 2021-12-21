/*
	Praticar a comparação de diferentes valores

	Nos últimos dois desafios, aprendemos sobre o operador de igualdade (==) e o 
	operador de igualdade estrita (===). Vamos fazer uma breve revisão e 
	praticar usando esses operadores mais uma vez.

	Se os valores sendo comparados não são do mesmo tipo, o operador de 
	igualdade fará a conversão de tipo e, então, avaliará os valores. No 
	entanto, o operador de igualdade estrita vai comparar ambos os tipos de 
	dados e os valores, sem converter de um tipo para outro.

	Exemplos

	3 == '3' retorna true porque JavaScript faz a conversão de tipo de string 
	para número. 3 === '3' retorna falso porque os tipos são diferentes e não 
	é feita a conversão de tipo.

	Observação: em JavaScript, você pode determinar o tipo de uma variável ou 
	de um valor, com o operador typeof, como vemos a seguir:

	typeof 3
	typeof '3'

	typeof 3 retorna a string number e typeof '3' retorna a string string.

*/

// exemplo 1
let a = 3 == 3;
let b = 3 == '3';

console.log(a, '3 => ', typeof(3)); // number
console.log(b, '"3" => ', typeof('3')); // string

// exemplo 2
// function compareEquality(a, b) {
// 	if (a === b) {
// 		return 'Equal';
// 	}

// 	return 'Not equal';
// }

// const result = compareEquality(2, '2'); // Not equal
// console.log(result);

// exemplo 3
const compareEquality = (a, b) => {
	if (a === b) {
		return 'Equal';
	}
	return 'Not Equal';
}

const result = compareEquality(3, '3');
console.log(result);
