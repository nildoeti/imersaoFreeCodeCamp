/*
	Escrever JavaScript reutilizável com funções

	Em JavaScript, nós podemos dividir nosso código em partes reutilizáveis 
	chamadas de funções.

	Aqui está um exemplo de uma função:

	function functionName() {
	  console.log("Hello World");
	}

	Você pode chamar ou invocar essa função ao usar seu nome seguido de 
	parênteses, da seguinte forma: functionName(); Cada vez que a função é 
	chamada, imprimirá no console a mensagem Hello World. Todo o código entre 
	as chaves será executado toda vez que uma função for chamada.

	Crie uma função chamada reusableFunction que imprime a string Hi World 
	no console.
	Chame a função.

*/

// exemplo 1
function functionName() {
	console.log('Hello World');
}

// chame a função quantas vezes precisar
functionName();
functionName();
functionName();

// exemplo 2
function reusableFunction() {
	console.log('Hi World');
}

reusableFunction(); // chamada da função