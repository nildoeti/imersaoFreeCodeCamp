/*
	Sobrescrever métodos herdados

	Nas lições passadas, você aprendeu que um objeto pode herdar seus
	comportamentos (métodos) de outro objeto ao referenciar o prototype do
	objeto:

	ChildObject.prototype = Object.create(ParentObject.prototype);

	Em seguida, o ChildObject recebeu seu próprio método ao encadear eles neste
	prototype:

	ChildObject.prototype.methodName = function() {...};

	É possível sobrescrever um método herdado. É feito da mesma maneira - ao
	adicionar o método a ChildObject.prototype utilizando o mesmo nome do
	método que aquele a ser sobrescrito. Aqui está um exemplo de Bird
	sobrescrevendo o método eat() herdado de Animal:

	function Animal() { }
	Animal.prototype.eat = function() {
	  return "nom nom nom";
	};
	function Bird() { }

	Bird.prototype = Object.create(Animal.prototype);

	Bird.prototype.eat = function() {
	  return "peck peck peck";
	};

	Se você tem uma instância let duck = new Bird(); e você chamar duck.eat(),
	é assim que o JavaScript procura pelo método na cadeia de prototype de duck:

	    duck => o método eat() está definido aqui? Não.
	    Bird => o método eat() está definido aqui? => Sim. Execute isso e pare
	    de procurar.
	    Animal => eat() também é definido, mas o JavaScript parou de procurar
	    antes de chegar a este level.
	    Objeto => JavaScript parou de procurar antes de chegar a este nível.

*/

// exemplo de Bird sobrescrevendo o método eat() herdado de Animal
function Animal () {} // função construtora Animal
Animal.prototype.eat = function() { // prototipo de super tipo
	return 'non non non';
};


function Bird () {}

Bird.prototype.eat = function () {
	return 'peck peck peck';
}

