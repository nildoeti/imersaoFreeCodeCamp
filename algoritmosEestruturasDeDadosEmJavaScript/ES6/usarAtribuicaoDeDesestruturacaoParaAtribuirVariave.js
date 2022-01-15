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

// atribuição de desestruturação
const user = {name: 'John Doe', age: 34};
const {name: userName, age: userAge} = user;

console.log(userName, userAge);