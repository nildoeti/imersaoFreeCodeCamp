/*
	Capturar argumentos passados na ordem errada ao chamar uma função

	Continuando a discussão sobre chamada de funções, o próximo bug para
	prestar atenção é quando os argumentos de uma função são fornecidos na
	ordem incorreta. Se os argumentos forem de diferentes tipos, tal como uma
	função esperando um array e um inteiro, isso provavelmente lançará um erro
	de tempo de execução. Se os argumentos são do mesmo tipo (todos os
	inteiros, por exemplo), então a lógica do código não fará sentido.
	Certifique-se de fornecer todos os argumentos exigidos, na ordem adequada
	para evitar esses problemas.

	Desafio

	A função raiseToPower eleva uma base para um expoente. Infelizmente, não é
	chamada corretamente - corrija o código para que o valor de power seja o 8
	esperado.
*/

// antes
// function raiseToPower(b, e) {
//   return Math.pow(b, e);
// }

// let base = 2;
// let exp = 3;
// let power = raiseToPower(exp, base);
// console.log(power); // 9
''
// depois
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power); // 8
