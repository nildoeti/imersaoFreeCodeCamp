/*
	Usar a sintaxe de classe para criar uma função construtora

	ES6 fornece uma nova sintaxe para criar objetos, usando a
	palavra-chave class.

	Deve ser notado que a sintaxe class é apenas sintaxe, um syntatical sugar.
	JavaScript ainda não oferece suporte completo ao paradigma orientado a
	objetos, ao contrário do que acontece em linguagens como Java, Python, Ruby,
	etc.

	No ES5, geralmente definimos uma função construtora (constructor function)
	e usamos a palavra-chave new para instanciar um objeto.

	var SpaceShuttle = function(targetPlanet){
	  this.targetPlanet = targetPlanet;
	}
	var zeus = new SpaceShuttle('Jupiter');

	A sintaxe class simplesmente substitui a criação da função construtora
	(constructor):

	class SpaceShuttle {
	  constructor(targetPlanet) {
	    this.targetPlanet = targetPlanet;
	  }
	}
	const zeus = new SpaceShuttle('Jupiter');

	Deve ser notado que a palavra-chave class declara uma nova função, para
	qual um construtor é adicionado. Esse construtor é invocado quando new é
	chamado na criação de um novo objeto.

	Observação: UpperCamelCase (observe a primeira letra de cada palavra em
	maiúsculo) deve ser usado por convenção para nomes de classe no ES6, como
	em SpaceShuttle usado acima.

	O método constructor é um método especial usado para inicializar um objeto
	criado com uma classe. Você aprenderá mais sobre isso na seção Programação
	Orientada a Objetos da Certificação de Algoritmos e Estruturas de
	Dados JavaScript.

*/

// funcao construtora para ES5
// var SpaceShutle = function(targetPlanet) {
// 	this.targetPlanet = targetPlanet;
// };
// var zeus = new SpaceShutle('jupiter');

// funcao construtora para ES6
class Spaceshutle {
	constructor(targetPlanet) {
		this.targetPlanet = targetPlanet;
	}
}

var zeus = new Spaceshutle("Jupiter");
console.log(zeus);

/*
	Desafio
	Use a palavra-chave class e declare o método constructor para criar a
	classe Vegetable.

	A classe Vegetable permite criar um objeto vegetal com a propriedade name
	que é passada ao constructor.
*/

class Vegetable {
	constructor(name) {
		this.name = name;
	}
}

const carrot = new Vegetable("carrot");
console.log(carrot);
