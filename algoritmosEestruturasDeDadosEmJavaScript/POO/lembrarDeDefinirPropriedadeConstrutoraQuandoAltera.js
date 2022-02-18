/*
	Lembrar de definir a propriedade construtora quando alterar o protótipo

	Tem um efeito colateral crucial de definir manualmente o protótipo de um
	novo objeto. Isso apaga a propriedade constructor! Essa propriedade pode
	ser utilizada para verificar qual função construtora criou a instância, mas
	já que a propriedade foi sobrescrita, agora retorna resultados falsos:

	duck.constructor === Bird;
	duck.constructor === Object;
	duck instanceof Bird;

	Em ordem, essas expressões seriam avaliadas a false, true e true.

	Para corrigir isso, toda vez que o protótipo é manualmente definido para um
	novo objeto, lembre-se de definir a propriedade constructor:

	Bird.prototype = {
	  constructor: Bird,
	  numLegs: 2,
	  eat: function() {
	    console.log("nom nom nom");
	  },
	  describe: function() {
	    console.log("My name is " + this.name);
	  }
	};


*/

function Bird (name) {
	this.name = name;
}

let birdOne = new Bird('Donald');

Bird.prototype = {
	constructor: Bird,
	numLegs: 2,
	eat: function () {
		console.log('a descrition');
	},
	describe: function () {
		console.log('My name is' + this.name);
	}
}

console.log(birdOne); // { name: 'Donald' }
console.log(Bird.constructor === Bird()); // false
console.log(birdOne.constructor === Bird()); // false
console.log(birdOne.constructor === Object); // false
console.log(birdOne instanceof Bird); // false
console.log(Bird instanceof Bird); // false


/*
	Desafio
	Define a propriedade constructor no prototype de Dog.
*/

function Dog(name) {
	this.name = name;
}

let dogOne = new Dog('Pateta');


Dog.prototype = {
	constructor: Dog,
	numLegs: 4,
	eat: function() {
		console.log('it is a descrition');
	},
	drescribe: function() {
		console.log('My name is ' + this.name);
	}
}
console.log(dogOne); // { name: 'Pateta' }
console.log(Dog.constructor === Dog); // false
console.log(dogOne.constructor === Object); // false
