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

// forma normal para declarar objetos
//const user = {
    //name: 'John Doe',
    //age: 34
    //};

//// acessando as propriedades do objeto
//const userName = user.name;
//const userAge = user.age;

// forma atribuição de desestruturação
// const {name: userName, age: ageuser} = user;

/*
	Substitua as duas atribuições com uma atribuição de desestruturação para HIGH_TEMPERATUR, highToday, highTomorrowES
	equivalente. Ainda deve ser atribuído às variáveis highToday e highTomorrow 
	os valores de today e tomorrow do objeto HIGH_TEMPERATURES.
*/

// const HIGH_TEMPERATURES = {
// 	yesterday: 75,
// 	today: 77,
// 	tomorrow: 80
// };

// // acessando os objetos e suas propriedades no modo normal
// const highYesterday = HIGH_TEMPERATURES.yesterday;
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;

// // exibindo os dados selecionados do objeto HIGH_TEMPERATURES
// console.log(highYesterday, highToday, highTomorrow); // 75 77 80


// atribuição de desestruturação para HIGH_TEMPERATURES
const {
		yesterday: highYesterday, 
		today: highToday, 
		tomorrow: highTomorrow
	} = HIGH_TEMPERATURES;

	