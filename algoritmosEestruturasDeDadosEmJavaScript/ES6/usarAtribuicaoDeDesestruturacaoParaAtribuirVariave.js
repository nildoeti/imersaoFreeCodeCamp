/*
	Usar atribuição de desestruturação para atribuir variáveis de objetos

	Desestruturar o permite atribuir um novo nome de variável quando extrair 
	valores. Você pode fazer isso ao colocar o novo nome após dois pontos
	quando atribuir o valor.

	Usando o mesmo objeto do exemplo anterior:

	const user = { name: 'John Doe', age: 34 };

	Aqui está como você pode dar novos nomes a variáveis na atribuição:

	const { name: userName, age: userAge } = user;

	Você pode lê-lo como "pegue o valor de user.name e atribua-o a uma nova 
	variável chamada userName" e assim em diante. O valor de userName seria a 
	string John Doe e o valor de userAge seria o número 34.

*/

// declaração e extração dos dados na forma usual
const user = {name: 'John Doe', age: 34};
console.log(user.name, user.age); // John Doe 34

// atribuição de desestruturação
const {name: userName, age: userAge} = user;
console.log(userName, userAge); // John Doe 34

/*
	Substitua as duas atribuições com uma atribuição de desestruturação para HIGH_TEMPERATUR, highToday, highTomorrowES
	equivalente. Ainda deve ser atribuído às variáveis highToday e highTomorrow 
	os valores de today e tomorrow do objeto HIGH_TEMPERATURES.
*/

const HIGH_TEMPERATUR = {
	yesterday: 75,
	today: 80
};

// // acessando os objetos e suas propriedades no modo normal
console.log(HIGH_TEMPERATUR.yesterday); // 75
console.log(HIGH_TEMPERATUR.today); // 80

// atribuição de desestruturação para HIGH_TEMPERATURES
const {
	yesterday: highYesterday,
	today: highToday
} = HIGH_TEMPERATUR;
console.log('\n...\n');
console.log(highYesterday, highToday); // 75, 80