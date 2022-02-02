/*
	Gerar um array de todas as chaves de objeto com Object.keys()

	Também podemos gerar um array o qual contém todas as chaves armazenadas em
	um objeto usando o método Object.keys() e passando um objeto como argumento.
	Isso retornará um array com strings representando cada propriedade do
	objeto. Novamente, não haverá uma ordem específica para as entradas no
	array.

	Termine de escrever a função getArrayOfUsers para que retorne um array
	contendo todas as propriedades do objeto que receber como argumento.
*/
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Altere apenas o código abaixo desta linha
return Object.keys(obj);
  // Altere apenas o código acima desta linha
}

console.log(getArrayOfUsers(users)); // [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
