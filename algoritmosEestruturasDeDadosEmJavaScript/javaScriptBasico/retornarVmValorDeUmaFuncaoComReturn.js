/*
	Retornar um valor de uma função com return

	Nós podemos passar valores para uma função com argumentos. Você pode usar 
	uma instrução return para enviar um valor para fora de uma função.

	Exemplo

	function plusThree(num) {
	  return num + 3;
	}

	const answer = plusThree(5);

	answer tem o valor de 8.

	plusThree recebe um argumento para num e retorna um valor igual a num + 3.

	Crie uma função timesFive que aceita um argumento, multiplica ele por 5 e 
	retorna o novo valor.

*/

// exemplo 1f
function plusThree(num) {
	return num + 3;
}

const answer = plusThree(5);
console.log(answer);


// exemplo 2
function timesFive(x) {
	return x * 5;
}

const mult = timesFive(5);
console.log(mult);
