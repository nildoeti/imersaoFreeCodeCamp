
/*
	Usar typeof para verificar o tipo da variável

	Você pode usar typeof para verificar a estrutura de dado, ou tipo, de uma
	variável. Isso é útil na depuração quando trabalhando com diversos tipos de
	dados. Se você pensar que está adicionando dois números, mas na verdade um
	é na verdade uma string, o resultado pode ser inesperado. Erros de tipo
	podem se esconder em cálculos ou chamada de funções. Seja cuidadoso
	especialmente quando você estiver acessando e trabalhando com dados
	externos na forma de um objeto JavaScript Object Notation (JSON).

	Aqui está alguns exemplos usando typeof:

	console.log(typeof "");
	console.log(typeof 0);
	console.log(typeof []);
	console.log(typeof {});

	Em ordem, o console exibirá as strings string, number, object e object.

	JavaScript reconhece seis tipos de dados primitivos (imutável): Boolean,
	Null, Undefined, Number, String e Symbol (novo em ES6) e um tipo para itens
	mutáveis: Object. Note que em JavaScript, arrays são tecnicamente um tipo
	de objeto.

	Adicione duas instruções console.log() para verificar o typeof de cada uma
	das duas variáveis seven e three no código.
*/

// exemplo de uso para typeof
console.log(typeof('')); // string
console.log(typeof(0)); // number
console.log(typeof([])); // object
console.log(typeof({})); // object
