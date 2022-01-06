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
// const obj = {
// 	name: 'FreeCodeCamp',
// 	review: 'Awesome'
// };

// Object.freeze(obj); // protegendo nosso objeto
// obj.review = 'bad';
// obj.newProp = 'Test';
// console.log(obj); // { name: 'FreeCodeCamp', review: 'Awesome' }

/*
	Objeto obj, protgido.
	Portanto a alteração em obj.newProp = 'Text', não aconteceu.
*/


/*
	Desafio
	Nesse desafio, você usará o método Object.freeze para prevenir a mudança de 
	constantes matemáticas. Você precisa congelar o objeto MATH_CONSTANTS para 
	que ninguém possa alterar o valor de PI, adicionar ou deletar propriedades.
*/

function freezeObj() {
	const MATH_CONSTANTS = {
		PI: 3.14
	};
	Object.freeze(MATH_CONSTANTS);

	try {
		MATH_CONSTANTS.PI = 99; // alterando o valor par PI
	} catch(ex) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI; // aqui deveria retornar 99
}

const PI = freezeObj(); // protegendo PI de sofrer alterações
console.log(PI); // 3.14


