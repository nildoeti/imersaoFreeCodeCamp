/*
	Contar para trás com um laço for

	Um laço for também pode contar pra trás, contanto que possamos definir as 
	condições certas.

	Para decrementar em dois cada iteração, nós precisamos alterar nossa 
	inicialização, condição e expressão final.

	Nós começaremos em i = 10 e vamos iterar enquanto i > 0. Nós decrementamos i 
	por dois em cada iteração com i -= 2.

	const ourArray = [];

	for (let i = 10; i > 0; i -= 2) {
	  ourArray.push(i);
	}

	ourArray agora vai conter [10, 8, 6, 4, 2]. Vamos mudar nossa inicialização 
	e expressão final para que possamos contar para trás em dois para criar um 
	array de números ímpares decrescentes.
*/

// exemplo 1
const ourArray = [];
for (let i = 10; i > 0; i-= 2) {
	ourArray.push(i);
}
console.log(ourArray);
