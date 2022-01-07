/*
	Criar funções anônimas com arrow functions

	No JavaScript, muitas vezes não precisamos nomear nossas funções, 
	especialmente quando passamos uma função como argumento para outra função. 
	Em vez disso, criamos funções anônimas. Como não vamos reutilizar essas 
	funções posteriormente, não precisamos nomeá-las.

	Para fazer isso, geralmente usamos a seguinte sintaxe:

	const myFunc = function() {
	  const myVar = "value";
	  return myVar;
	}

	ES6 nos fornece um syntatical sugar onde não precisamos escrever funções 
	anônimas como no exemplo acima. Ao invés disso, você pode usar a sintaxe 
	arrow function:

	const myFunc = () => {
	  const myVar = "value";
	  return myVar;
	}

	Quando a função executa apenas uma linha de código ou retorna apenas um 
	valor, a sintaxe de arrow function nos permite omitir a palavra-chave 
	return assim como as chaves ao redor do código. Essa abordagem ajuda a 
	criar funções menores em instruções de uma linha:

	const myFunc = () => "value";

	Esse código ainda retornará a string value por padrão.
*/

// exemplo de função padrão
// const myFun = function() {
// 	const myVar = 'value';
// 	return m

// }

// função anônimas com base na ES6
// const myFun = () => {
// 	const myVar = 'value';
// 	return myVar
// }
// const p1 = myFun();
// console.log(p1);

// funções menores em chaves
// const myFun = () =>  'value';
// console.log(myFun());

/*
	Desafio
	Rescreva a função atribuída à variável magic usando a sintaxe de arrow 
	function. A função deve retornar new Date(). Além disso, garanta que nada 
	seja definido usando a palavra-chave var.
*/

// problema
var magic function() {
	return new Date();
};

// resposta
const magic = () => {
	return new Date;
};