/*
	Verificar o construtor de um objeto com instanceof

	Toda vez que a função construtora cria um novo objeto, o objeto é definido
	como uma instance do seu construtor. JavaScript provê uma forma conveniente
	para verificar isso com o operador instanceof. instanceof permite que você
	compare um objeto a um construtor, retornando true ou false caso seja ou
	não um objeto criado pelo construtor, respectivamente. Exemplo:

	let Bird = function(name, color) {
	  this.name = name;
	  this.color = color;
	  this.numLegs = 2;
	}

	let crow = new Bird("Alexis", "black");

	crow instanceof Bird;

	Este método instanceof irá retornar true.

	Se um objeto for criado sem usar um construtor, instanceof verificará que
	não é uma instância daquele construtor:

	let canary = {
	  name: "Mildred",
	  color: "Yellow",
	  numLegs: 2
	};

	canary instanceof Bird;

	Este método instanceof irá retornar false.

*/

// 	Verificar o construtor de um objeto com instanceof
let Bird = 	function (name, color) {
	this.name = name;
	this.color = color;
	this.numLegs = 2;
};

let crow = new Bird('Alexis', 'black');
crow instanceof Bird;

console.log(crow); // Bird { name: 'Alexis', color: 'black', numLegs: 2 }


console.log(crow instanceof Bird); // true


// testando um objeto construido sem um construct

let canary = {
	name: 'Mildered',
	color: 'Yellow',
	numLegs: 2
}

console.log(canary instanceof Bird); // false


/*
	Crie uma nova instância do construtor House, atribuindo à variável myHouse
	e passe o número de quartos. Então, utilize instanceof para verificar que é
	uma instância de House.
*/

function House (numBedrooms) {
	this.numBedrooms = numBedrooms;
}

let myHouse = new House();
myHouse instanceof House;

console.log(myHouse);  // House { numBedrooms: undefined }
console.log(myHouse instanceof House); // true

