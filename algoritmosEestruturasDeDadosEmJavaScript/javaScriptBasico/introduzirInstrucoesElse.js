/*
	Introduzir instruções else

	Quando uma condição para uma instrução if for verdadeira, o bloco de código 
	seguinte será executado. E quando a condição for falsa? Normalmente, nada 
	aconteceria. Com uma instrução else, um bloco de código alternativo pode 
	ser executado.

	if (num > 10) {
	  return "Bigger than 10";
	} else {
	  return "10 or Less";
	}
*/

// exemplo 1
// let num = 3;

// if (num > 10) {
// 	return 'Bigger than 10';
// } else {
// 	return '10 or less';
// }

// exemplo prático com uso de funções
function testLogicalElse(val) {
	let result = '';
	if (val > 5) {
		return 'Bigger than 5';
	} else {
		return '5 or Smaller'
	}
}

const result = testLogicalElse(43);
console.log(result);