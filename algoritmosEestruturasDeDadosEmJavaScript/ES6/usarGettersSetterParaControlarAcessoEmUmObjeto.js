/*
	Usar getters e setter para controlar acesso a um objeto

	Você pode obter valores de um objeto e definir o valor da propriedade
	dentro de um objeto.

	Esses são classicamente chamados de getters e setters.

	Funções getter tem a finalidade de simplesmente retornar (get) o valor de
	uma variável privada de um objeto para o usuário sem que o usuário acesse
	diretamente a variável privada.

	Funções setter tem a finalidade de modificar, ou definir (set), o valor de
	uma variável privada de um objeto baseado no valor passado dentro da função
	setter. Essa mudança poderia envolver cálculos, ou até sobrescrever
	completamente o valor anterior.

	class Book {
	  constructor(author) {
	    this._author = author;
	  }
	  // getter
	  get writer() {
	    return this._author;
	  }
	  // setter
	  set writer(updatedAuthor) {
	    this._author = updatedAuthor;
	  }
	}
	const novel = new Book('anonymous');
	console.log(novel.writer);
	novel.writer = 'newAuthor';
	console.log(novel.writer);

	O console exibirá as strings anonymous e newAuthor.

	Note a sintaxe usada para invocar o getter e setter. Eles nem sequer se
	parecem com funções. Getters e setters são importantes porque escondem os
	detalhes internos da implementação.

	Observação: é uma convenção preceder o nome de uma variável privada com um
	underscore (_). No entanto, essa prática por si só não torna uma variável
	privada.

	Use a palavra-chave class para criar a classe Thermostat. O constructor
	aceita uma temperatura Fahrenheit.

	Na classe, crie um getter para obter a temperatura em Celsius e um setter
	para definir a temperatura em Celsius.

	Lembre-se de que C = 5/9 * (F - 32) e F = C * 9.0 / 5 + 32, aonde F é o
	valor da temperatura em Fahrenheit e C é o valor da mesma temperatura em
	Celsius.

	Observação: quando você implementa isso, você vai rastrear a temperatura
	dentro da classe em uma escala, ou Fahrenheit ou Celsius.

	Esse é o poder de um getter e um setter. Você está criando uma API para
	outro uso, que pode pegar o resultado correto independente de qual está
	rastreando.

	Em outras palavras, você está abstraindo detalhes de implementação do
	usuário.
*/
class Book {
	constructor(author) {
		this._author = author;
	}

	// getter
	get write() {
		return this._author;
	}

	// setter
	set write(updateAuthor) {
		this._author = updateAuthor;
	}
}

const novel = new Book('anonymous');

console.log(novel); // Book { _author: 'anonymous' }
console.log(novel.write); // anonymous

novel.write = 'newAuthor';
console.log(novel.write); // newAuthor

/*
	Use a palavra-chave class para criar a classe Thermostat. O constructor
	aceita uma temperatura Fahrenheit.

	Na classe, crie um getter para obter a temperatura em Celsius e um setter
	para definir a temperatura em Celsius.

	Lembre-se de que C = 5/9 * (F - 32) e F = C * 9.0 / 5 + 32, aonde F é o
	valor da temperatura em Fahrenheit e C é o valor da mesma temperatura em Celsius.

	Observação: quando você implementa isso, você vai rastrear a temperatura
	dentro da classe em uma escala, ou Fahrenheit ou Celsius.

	Esse é o poder de um getter e um setter. Você está criando uma API para
	outro uso, que pode pegar o resultado correto independente de qual está
	rastreando.

	Em outras palavras, você está abstraindo detalhes de implementação do
	usuário.

*/

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}