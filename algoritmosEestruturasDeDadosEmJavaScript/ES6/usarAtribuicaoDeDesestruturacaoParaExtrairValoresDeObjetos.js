/*
	Usar atribuição de desestruturação para extrair valores de objetos

	Atribuição de desestruturação é uma sintaxe especial introduzida na ES6, 
	para atribuir nitidamente valores retirados diretamente de um objeto.

	Considere o seguinte código ES5:

	const user = { name: 'John Doe', age: 34 };

	const name = user.name;
	const age = user.age;

	name teria o valor da string John Doe e age teria o número 34.

	Aqui está uma instrução de atribuição equivalente usando a sintaxe de 
	desestruturação ES6:

	const { name, age } = user;

	Novamente, name teria o valor da string John Doe e age teria o número 34.

	Aqui, as variáveis name e age serão criadas e atribuídas a elas os valores 
	de seus respectivos valores do objeto user. Você pode ver que fica muito 
	mais limpo.

	Você pode extrair quantos valores do objeto quanto você quer.
*/

// Considere o seguinte código ES5:
const user = {name: 'John', age: 20}
const name = user.name;
const age = user.age;
console.log(name, age); // John 20

// usando a sintaxe de desestruturação ES6:
const { name1, age2 } = user;
console.log(user);

