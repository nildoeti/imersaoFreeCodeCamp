/*
	Usar atribuição de desestruturação com o parâmetro rest para reatribuir 
	elementos de array

	Em algumas situações envolvendo um array desestruturado, podemos querer 
	coletar o resto dos elementos em um array separado.

	O resultado é similar a Array.prototype.slice(), como mostrado abaixo:

	const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
	console.log(a, b);
	console.log(arr);

	O console exibiria os valores 1, 2 e [3, 4, 5, 7].

	As variáveis a e b pegam o primeiro e o segundo valores do array. Depois 
	disso, por causa da presença do parâmetro rest, arr pega o resto dos valores 
	na forma de um array. O elemento rest só funciona corretamente como a última 
	variável na lista. De momento, você não pode usar o parâmetro rest para 
	capturar um sub-array que deixa de fora o último elemento do array original.
*/

// exemplo 1
const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b); // 1 2
console.log(arr); // [ 3, 4, 5, 6, 7 ]

// exemplo 2
const [...x] = [11, 12, 13, 14, 15, 16]; // parâmetro rest
console.log(x); // [ 11, 12, 13, 14, 15, 16 ]
