/*
	Usar recursão para criar um intervalo de números

	Continuando do desafio anterior, fornecemos a você outra oportunidade para 
	criar uma função recursiva para resolver um problema.

	Definimos uma função chamada rangeOfNumbers com dois parâmetros. A função 
	deve retornar um array de inteiros a qual começa com um número representado 
	pelo parâmetro startNum e terminar com um número representado pelo 
	parâmetro endNum. O número inicial sempre será menor ou igual ao número 
	final. Sua função precisa usar recursão para chamar a si mesma e não deve 
	depender de nenhum tipo de laço. Também deve funcionar para casos onde 
	startNum e endNum tiverem o mesmo valor.
*/

// SOLUÇÃO 1
// function rangeOfNumbers(startNum, endNum) {
// 	if (endNum - startNum === 0) {
// 		return [startNum];
// 	} else {
// 		let numbers = rangeOfNumbers(startNum, endNum - 1);
// 		numbers.push(endNum)
// 		return numbers;
// 	}
// }

// SOLUÇÃO 2
// function rangeOfNumbers(startNum, endNum) {
// 	return startNum === endNum
// 	? [startNum]
// 	: rangeOfNumbers(startNum, endNum -1).concat(endNum);
// };

// SOLUÇÃO 3
function rangeOfNumbers(startNum, endNum) {
	return startNum === endNum;
	? [startNum]
	: [...rangeOfNumbers(startNum, endNum - 1), endNum];
}