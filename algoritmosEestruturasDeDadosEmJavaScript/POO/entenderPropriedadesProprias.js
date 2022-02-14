/*
	Entender propriedades próprias

	No próximo exemplo, o construtor de Bird define duas propriedades: name e
	numLegs:

	function Bird(name) {
	  this.name = name;
	  this.numLegs = 2;
	}

	let duck = new Bird("Donald");
	let canary = new Bird("Tweety");

	name e numLegs são chamados own properties, pois são definidos diretamente
	na instância do objeto. Isso significa que cada duck e canary possuem suas
	próprias cópias separadas destas propriedades. Na verdade, toda instância
	de Bird terá sua própria cópia dessas propriedades. O código a seguir
	adiciona todas as propriedades próprias (own properties) de duck para o
	array ownProps:

	let ownProps = [];

	for (let property in duck) {
	  if(duck.hasOwnProperty(property)) {
	    ownProps.push(property);
	  }
	}

	console.log(ownProps);

	O console vai exibir o valor ["name", "numLegs"].

*/

// function Bird (name) {
// 	this.name = name;
// 	let numLegs = 2;
// }

// let duck = new Bird('Donald');
// let canary = new Bird('Tweety');

// console.log(duck); // Bird { name: 'Donald' }
// console.log(canary); // Bird { name: 'Tweety' }


// let ownProps = [];
// for (let property in duck) {
// 	if (duck.hasOwnProperty(property)) { // hasOwnProperty retorna um boolean
// 											// no objeto especificado
// 		ownProps.push(duck);
// 	}
// }

// console.log(ownProps);


/*
 * Desafio
 *
 * Adicione as propriedades próprias do canary para o array ownProps.
*/

function Bird(name) {
	// body...
	this.name = name;
	this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];

for (let property in canary) {
	if (canary.hasOwnProperty(property)) {
		ownProps.push(canary);
	}
}

console.log(ownProps);
