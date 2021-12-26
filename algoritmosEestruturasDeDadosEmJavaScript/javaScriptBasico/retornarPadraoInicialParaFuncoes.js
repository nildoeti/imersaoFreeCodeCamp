/*
	Retornar o padrão inicial para funções

	Quando uma instrução return é alcançada, a execução da função atual para e 
	retorna o código para o local da chamada da função.

	Exemplo

	function myFun() {
	  console.log("Hello");
	  return "World";
	  console.log("byebye")
	}
	myFun();

	O código acima exibirá no console a string Hello, e retorna a string World. 
	A string byebye nunca vai ser exibida no console, porque a função termina 
	na instrução return.

*/

// exemplo 1
// function myFun(argument) {
// 	// body...
// 	console.log('Hello');
// 	return 'World';
// 	console.log('byebye'); // esta declaração não é exibido.

// }

// console.log(myFun());

// exemplo 2
function abTest(a, b) {
	// body...
	if (a < 0 || b <0){return undefined}

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

const result = abTest(2, 3);
console.log(result);