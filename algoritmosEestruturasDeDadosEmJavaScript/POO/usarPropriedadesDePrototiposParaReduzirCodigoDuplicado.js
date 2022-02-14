/*
	Usar propriedades de protótipos para reduzir código duplicado

	Já que numLegs provavelmente terá o mesmo valor para todas as instâncias de
	Bird, você tem a variável numLegs duplicada dentro de cada instância de Bird.

	Isso pode não ser um problema quando há apenas duas instâncias, mas imagine
	se há milhões de instâncias. Neste cenário teríamos muitas variáveis
	duplicadas.

	Uma maneira melhor é usar o prototype de Bird. Propriedades dentro de
	prototype são compartilhados entre todas as instâncias de Bird. Aqui está
	como adicionar numLegs para o prototype de Bird:

	Bird.prototype.numLegs = 2;

	Agora todas as instâncias de Bird possuem a propriedade numLegs.

	console.log(duck.numLegs);
	console.log(canary.numLegs);

	Já que todas as instâncias automaticamente possuem as propriedades no
	prototype, pense no prototype como uma "receita" para criar objetos. Note
	que o prototype para duck e canary faz parte do construtor de Bird como
	Bird.prototype. Quase todos objetos em JavaScript possuem a propriedade
	prototype o qual é parte da função construtora que o criou.

*/
// exemplo de protótipos para reduzir código duplicado 
function Bird (name) {
	this.name = name;
}

// protótipos para reduzir código duplicado
Bird.prototype.numLegs = 4;

let duck = new Bird('Donald');
let oldDuck = new Bird('Yellow');

console.log(duck.numLegs); // 4
console.log(oldDuck.numLegs); // 4

/*
	Desafio
	Adicione a propriedade numLegs para o prototype de Dog
*/

function Dog (name) {
	this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

console.log(beagle); // Dog { name: 'Snoopy' }


