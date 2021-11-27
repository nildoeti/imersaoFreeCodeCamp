/*
	Atribuir com o valor retornado

	Se você se lembrar de nossa discussão sobre como armazenar valores com o 
	operador de atribuição, tudo à direita do sinal de igual é resolvido antes 
	de o valor ser atribuído. Isso significa que podemos pegar o valor de 
	retorno de uma função e atribuí-lo a uma variável.

	Assuma que temos uma função predefinida chamada sum, que soma dois números. 
	Então:

	ourSum = sum(5, 12);

	chamará a função sum, a qual retorna o valor 17 e então atribui este valor 
	à variável ourSum.

	Chame a função processArg com um argumento de 7 e atribui o retorno do seu 
	valor para a variável processed.
*/

// variável global
let processed = 7;


function processArg(num) {
	// body...
	return (num + 3) / 5;
}

const result = processed = processArg(7);
console.log(result); // 2