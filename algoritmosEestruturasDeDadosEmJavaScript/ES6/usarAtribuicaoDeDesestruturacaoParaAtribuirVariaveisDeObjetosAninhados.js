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

// bjetos aninhados
const user = { // object one
	johnDoe: { // object two
		age: 34,
		email: 'johnDoe@freeCodeCamp.com'
	}
};

// extrair valores de propriedades de objetos
const {johnDoe: {age, email}} = user;

/* 	atribuir o valor de uma propriedade de um objeto 
 	para variáveis com nomes diferentes 
 /*

 const {johnDoe: {age: userAge, email: userEmail}} = user;


 /*
 	Substitua as duas atribuições com uma atribuição de desestruturação 
 	equivalente. Ainda deve ser atribuído às variáveis lowToday e highToday os 
 	valores de today.low e today.high do objeto LOCAL_FOR
 */

 const LOCAL_FORECAST = {
 	yesterday: {low: 61, high: 75},
 	today: {low: 64, high: 77},
 	tomorrow: {low: 68, high: 80}
 };
// Substitua as duas atribuições com uma atribuição de desestruturação 
const lowYesterday = LOCAL_FORECAST.yesterday.low; // 61
const highyesterday = LOCAL_FORECAST.yesterday.high; // 75

console.log(lowYesterday);
console.log(highyesterday);

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

console.log(lowToday); // 64
console.log(highToday); // 77

const lowTomorrow = LOCAL_FORECAST.tomorrow.low;
const highTomorrow = LOCAL_FORECAST.tomorrow.high;

console.log(lowTomorrow); // 68
console.log(highTomorrow); // 80