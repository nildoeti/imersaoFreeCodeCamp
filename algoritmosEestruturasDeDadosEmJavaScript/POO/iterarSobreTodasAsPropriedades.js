/*
	Iterar sobre todas as propriedades

	Até agora você já viu dois tipos de propriedades: as propriedades own
	properties e prototype. Propriedades próprias (ou Own properties) são
	definidas diretamente na própria instância do objeto. E as propriedades do
	protótipo são definidas em prototype.

	function Bird(name) {
	  this.name = name;  //own property
	}

	Bird.prototype.numLegs = 2; // prototype property

	let duck = new Bird("Donald");

	Aqui está como você adiciona own properties duck para o array ownProps e
	propriedades prototype para o array prototypeProps:

	let ownProps = [];
	let prototypeProps = [];

	for (let property in duck) {
	  if(duck.hasOwnProperty(property)) {
	    ownProps.push(property);
	  } else {
	    prototypeProps.push(property);
	  }
	}

	console.log(ownProps);
	console.log(prototypeProps);

	console.log(ownProps) deve exibir no console ["name"], e
	console.log(prototypeProps) exibirá no console ["numLegs"].

*/

// exemplos para own property e prototype property
function Bird (name) {
	this.name = name; // own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird('Donald');

console.log(duck);



// adiciona own properties duck para o array ownProps e propriedades 
// prototype para o array prototypeProps

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
	if (duck.hasOwnProperty(property)) {
		ownProps.push(property);
	} else {
		prototypeProps.push(property);
	}
}

console.log(ownProps); // [ 'name' ]
console.log(prototypeProps); // [ 'numLegs' ]


/*
	Desafio

	Adicione todas as propriedades próprias de beagle para o array ownProps.
	Adicione todas as propriedades prototype de Dog para o array prototypeProps.
*/

function Dog (name) {
	this.name = name;
}

Dog.prototype.numLegs = 4; // own property
let beagle = new Dog('Snoopy'); // new stancy of Dog

let ownProps2 = [];
let prototypeProps2 = [];

for (let property in beagle) {
	if (Dog.hasOwnProperty(property)) {
		ownProps2.push(property);
	} else {
		prototypeProps2.push(property);
	}
}


console.log(ownProps2); // [ 'name' ]

console.log(prototypeProps2); // [ 'numLegs' ]

