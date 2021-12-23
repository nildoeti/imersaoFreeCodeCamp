/*
	Comparar com o operador lógico AND

	Às vezes, você precisará testar mais de uma coisa de cada vez. O operador 
	lógico AND (&&) retornará true apenas se os operadores à esquerda e à 
	direita forem verdadeiros.

	O mesmo efeito pode ser alcançado aninhando uma instrução if dentro de 
	outro if:

	if (num > 5) {
	  if (num < 10) {
	    return "Yes";
	  }
	}
	return "No";

	só retornará Yes se num for maior que 5 e menor que 10. A mesma lógica pode 
	ser escrita assim:

	if (num > 5 && num < 10) {
	  return "Yes";
	}
	return "No";
*/

// exemplo 1
// function testLogicalAnd(val) {
// 	if (val > 5) {
// 		if (val < 10) {
// 			return 'Yes';
// 		}
// 	}
// 	return 'No';
// }

// const result = testLogicalAnd(6);
// console.log(result);


//  result
const testLogicalAnd = (val) => {
	if (eval > 5 && eval < 10) {
		return 'Yes';
	}
	return 'No';
} 

const result = testLogicalAnd(4);
console.log(result);