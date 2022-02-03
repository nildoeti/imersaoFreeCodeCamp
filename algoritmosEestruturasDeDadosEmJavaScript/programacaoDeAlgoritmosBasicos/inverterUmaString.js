/*
	Inverter uma string

	Inverta a string fornecida.
	Você pode ter que transformar a string em um array antes de poder inverter.
	Seu resultado deve ser uma string.

*/

// solução 1
// function reverseString(str) {
// 	let reversedStr = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		reversedStr += str[i];
// 	}
// 	return reversedStr;
// }


// solução 2
function reverseString(str) {
	return str
	.split('')
	.reverse()
	.join('');
}

reverseString('hello');
