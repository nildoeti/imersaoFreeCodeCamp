/*
	Acessar o conteúdo de uma lista utilizando a notação de colchetes

	A funcionalidade fundamental de qualquer estrutura de dados é,
	evidentemente, não só a capacidade de armazenar informação, como também a
	possibilidade de acessar esta informação quando necessário. Então, agora
	que aprendemos como criar um array, vamos começar a pensar em como podemos
	acessar as informações desse array.

	Quando definimos um array simples como o que vemos abaixo, existem 3 itens
	nele:

	let ourArray = ["a", "b", "c"];

	Em um array, cada item do array possui um índice . Esse índice possui dois
	papéis: é a posição daquele item no array e como você o referencia. No
	entanto, é importante notar que arrays em JavaScript são indexados a partir
	do zero, o que significa que o primeiro elemento do array está, na verdade,
	na posição zero, e não na primeira. Para recuperar um elemento de um array,
	nós podemos ao final de um array adicionar um índice encapsulado com
	colchetes (por exemplo [0]), ou mais comumente, no final de uma variável
	que faz referência a um objeto array. Isso é conhecido como notação de
	colchetes. Por exemplo, se queremos recuperar o a de um array ourArray e
	atribuir a uma variável, nós podemos fazer isso com o código a seguir:

	let ourVariable = ourArray[0];

	Agora, ourVariable possui o valor de a.

	Além de acessar o valor associado ao índice, você também pode definir um
	índice para um valor usando a mesma notação:

	ourArray[1] = "not b anymore";

	Usando a notação de colchetes, nós agora redefinimos o item no índice 1,
	alterando a string b, para not b anymore. Agora, ourArray é
	["a", "not b anymore", "c"].

*/

// exemplo 1 de array simples
let ourArray = ['a', 'b', 'c'];
console.log(ourArray); // [ 'a', 'b', 'c' ]

let ourVariable = ourArray[0]; // atribui o primeiro item de um array em uma varivel
console.log(ourVariable); // a

ourArray[1] = 'not b anymore';
console.log(ourArray); // [ 'a', 'not b anymore', 'c' ]

/*
	Desafio
	A fim de concluir esse desafio, defina a segunda posição (index 1) do
	myArray como qualquer coisa que deseje, exceto a letra b.
*/

let myArray = ["a", "b", "c", "d"];
// Altere apenas o código abaixo desta linha
myArray[1] = 'e';
// Altere apenas o código acima desta linha
console.log(myArray);
