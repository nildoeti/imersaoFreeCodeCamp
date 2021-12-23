/*
	Comparar com o operador lógico OR

	O operador lógico OR (||) retorna true se qualquer um dos operandos for 
	true. Caso contrário, retorna false.

	O operador lógico ou é composto por dois símbolos de pipe: (||).
	Normalmente, ele pode ser encontrado entre as teclas Backspace e Enter.

	O padrão abaixo deve parecer familiar aos pontos das passagens anteriores:

	if (num > 10) {
	  return "No";
	}
	if (num < 5) {
	  return "No";
	}
	return "Yes";

	retornará Yes apenas se num for entre 5 e 10 (5 e 10 incluídos). A mesma 
	lógica pode ser escrita assim:

	if (num > 10 || num < 5) {
	  return "No";
	}
	return "Yes";
*/

// padrão para if do OR
// num = 0;
// if (num > 10) {
// 	return 'No';
// }
// if (num < 5) {
// 	return 'No'
// }
// return 'Yes';

// padrão par OR
// if (num > 10 || num < 5) {
// 	return 'No';
// }
// return 'Yes';


// Com uso de função
function testLogicalOr(val) {
	if (val < 10 || val > 20) {
		return 'Outside';
	}
	return 'Inside';
}

const result = testLogicalOr(15);
console.log(result);