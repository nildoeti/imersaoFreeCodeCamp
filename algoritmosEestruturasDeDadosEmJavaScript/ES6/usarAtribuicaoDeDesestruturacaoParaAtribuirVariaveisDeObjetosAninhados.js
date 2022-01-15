/*
	Usar atribuição de desestruturação para atribuir variáveis de objetos 
	aninhados

	Você pode usar os mesmos princípios das últimas duas lições para 
	desestruturar valores de objetos aninhados.

	Usando um objeto similar aos exemplos anteriores:

	const user = {
	  johnDoe: { 
	    age: 34,
	    email: 'johnDoe@freeCodeCamp.com'
	  }
	};

	Aqui está como extrair valores de propriedades de objetos e atribuí-los a 
	variáveis com o mesmo nome:

	const { johnDoe: { age, email }} = user;

	E aqui está como você pode atribuir o valor de uma propriedade de um objeto 
	para variáveis com nomes diferentes:

	const { johnDoe: { age: userAge, email: userEmail }} = user;

*/

// objetos aninhados
const user = {// first object
	johnDoe: { // second object
		age: 34,
		email: 'johnDoe@freeCodeCamp.com'
	},
	paulYoung: {
		age: 48,
		email: 'PaulYoung@freeCodeCamp.com'
	}
};

// acessando dados dos objetos aninhados
console.log(user.johnDoe.age); // 34
console.log(user.johnDoe.email); // johnDoe@freeCodeCamp.com
console.log(user.paulYoung.age); // 48
console.log(user.paulYoung.email); // PaulYoung@freeCodeCamp.com

// extrair valores de propriedades de objetos e atribuí-los variáveis com o mesmo nome
const {johnDoe: {age, email}} = user;
console.log(user.johnDoe.age); // 34
console.log(user.johnDoe.email); // johnDoe@freeCodeCamp.com


/*
	Substitua as duas atribuições com uma atribuição de desestruturação 
	equivalente. Ainda deve ser atribuído às variáveis lowToday e highToday os 
	valores de today.low e today.high do objeto LOCAL_FORECAST.
*/

const LOCAL_FORECAST = {
	yesterday: {low: 61, high: 75},
	today: {low: 54, high: 77},
	tomorrow: {low: 68, high: 80}
};

// problema para resolver
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;
console.log(lowToday, highToday); 54, 77
