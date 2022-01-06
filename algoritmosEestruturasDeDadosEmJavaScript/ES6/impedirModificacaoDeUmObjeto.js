/*
	Impedir a modificação de um objeto
	Como visto no desafio anterior, a declaração const sozinha, na verdade, não 
	protege a mutação de seus dados. Para garantir que seus dados não mudem, o 
	JavaScript fornece a função Object.freeze que previne os dados de serem 
	modificados.

	Qualquer tentativa de alterar o objeto será rejeitada, com um erro sendo 
	lançado se o script estiver executando em modo estrito.

	let obj = {
	  name:"FreeCodeCamp",
	  review:"Awesome"
	};
	Object.freeze(obj);
	obj.review = "bad";
	obj.newProp = "Test";
	console.log(obj); 
	As atribuições obj.review e obj.newProp vão resultar em erros, pois nosso 
	editor executa em modo estrito por padrão. O console vai exibir o valor 
	{ name: "FreeCodeCamp", review: "Awesome" }.
*/

// exemplo 1
const obj = {
	name: 'FreeCodeCamp',
	review: 'Awesome'
};

Object.freeze(obj); // protegendo nosso objeto
obj.review = 'bad';
obj.newProp = 'Test';
console.log(obj); // { name: 'FreeCodeCamp', review: 'Awesome' }

/*
	Objeto obj, protgido.
	Portanto a alteração em obj.newProp = 'Text', não aconteceu.
*/