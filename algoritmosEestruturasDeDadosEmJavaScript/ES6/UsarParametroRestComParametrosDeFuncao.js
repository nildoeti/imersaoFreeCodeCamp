/*
	Usar o parâmetro rest com parâmetros de função

	Para nos ajuda a criar funções mais flexíveis, ES6 introduziu o parâmetro 
	rest para parâmetros de funções. Com o parâmetro rest, você pode criar 
	funções que recebem um número variável de argumentos. Esses argumentos 
	são armazenados em um array que pode ser acessado depois dentro da função.

	Verifique esse código:

	function howMany(...args) {
	  return "You have passed " + args.length + " arguments.";
	}
	console.log(howMany(0, 1, 2));
	console.log(howMany("string", null, [1, 2, 3], { }));

	O console exibiria as strings You have passed 3 arguments e `You have 
	passed 4 arguments..

	O parâmetro rest elimina a necessidade de verificar o array args` e nos 
	permite usar `map()`, `filter()` e `reduce()` no array de parâmetros. 
*/

// exemplo 1
function howMany(...args) {
	return 'You have passed ' + args.length + ' arguments';
}

console.log(howMany(1, 2, 3));
console.log(howMany('string', null, [1, 2, 3], {}))
