/*
	Escrever funções declarativas concisas com ES6

	Ao definir funções dentro de objetos em ES5, nós temos de usar a
	palavra-chave function como se segue:

	const person = {
	  name: "Taylor",
	  sayHello: function() {
	    return `Hello! My name is ${this.name}.`;
	  }
	};

	Com ES6, você pode remover a palavra-chave function e dois pontos ao
	definir funções em objetos. Aqui está um exemplo dessa sintaxe:

	const person = {
	  name: "Taylor",
	  sayHello() {
	    return `Hello! My name is ${this.name}.`;
	  }
	};

*/

// forma ES5 para function
const person = {
	name: 'Taylor',
	sayHello: function() {
		return 'Hello! My name is ${this.name}';
	}
};

// forma ES6 para function
const person1 = {
	name: 'Taylor',
	sayHello() {
		return 'Hello! My name is ${this.name}';
	}
};
