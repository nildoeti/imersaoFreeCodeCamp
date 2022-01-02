/*
	Se você não estiver familiarizado com let, confira este desafio.

	Quando você declara uma variável com a palavra-chave var, ela é declarada 
	globalmente, ou localmente se declarada dentro de uma função.

	A palavra-chave let se comporta de forma similar, mas com alguns recursos 
	extras. Quando você declara a variável com a palavra-chave let dentro de um 
	bloco, declaração, ou expressão, seu escopo é limitado ao bloco, declaração, 
	ou expressão.

	Por exemplo:

	var numArray = [];
	for (var i = 0; i < 3; i++) {
	  numArray.push(i);
	}
	console.log(numArray);
	console.log(i);

	Aqui o console vai exibir os valores [0, 1, 2] e 3.

	Com a palavra-chave var, i é declarado globalmente. Então quando i++ é 
	executado, ele atualiza a variável global. Esse código é semelhante ao 
	seguinte:

	var numArray = [];
	var i;
	for (i = 0; i < 3; i++) {
	  numArray.push(i);
	}
	console.log(numArray);
	console.log(i);

	Aqui o console vai exibir os valores [0, 1, 2] e 3.

	Este comportamento causará problemas se você criasse uma função e 
	armazená-la para depois utilizar dentro de um laço for que utiliza a 
	variável i. Isso se deve ao fato da função armazenada sempre vai se referir 
	ao valor da variável global i atualizada.

	var printNumTwo;
	for (var i = 0; i < 3; i++) {
	  if (i === 2) {
	    printNumTwo = function() {
	      return i;
	    };
	  }
	}
	console.log(printNumTwo());

	Aqui o console vai exibir o valor 3.

	Como você pode ver, printNumTwo() exibe 3 e não 2. Isso se deve ao fato do 
	valor atribuído a i foi atualizado e printNumTwo() retorna a variável 
	global i e não o valor que i tinha quando a função foi criada dentro do 
	laço for. A palavra-chave let não segue este comportamento:

	let printNumTwo;
	for (let i = 0; i < 3; i++) {
	  if (i === 2) {
	    printNumTwo = function() {
	      return i;
	    };
	  }
	}
	console.log(printNumTwo());
	console.log(i);

	Aqui o console vai exibir o valor 2, e um erro que i is not defined 
	(i não foi definida).

	i não foi definida porque não foi declarada no escopo global. Ela é 
	declarada apenas dentro da declaração do laço for. printNumTwo() retornou 
	o valor correto porque três variáveis i distintas com valores únicos 
	(0, 1 e 2) foram criadas com a palavra-chave let dentro da declaração 
	do laço.

*/

// exemplo 1
var numArray = [];
for (var i = 0; i < 3; i++) {
	numArray.push(i)
}

console.log(numArray); // [ 0, 1, 2 ]
console.log(i); // 3


// exemplo 2
var numArray2 = [];
var i;
for (i = 0; i < 3; i++) {
	numArray2.push(i);
}

console.log(numArray2); // [ 0, 1, 2 ]
console.log(i); // 3


