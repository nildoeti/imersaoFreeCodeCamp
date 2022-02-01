/*
	Usar a palavra-chave delete para remover propriedades de objetos

	Agora você sabe o que são objetos, seus recursos básicos e suas vantagens.
	Resumindo, ele são uma forma de armazenar chave-valor que provê uma forma
	flexível e intuitiva de estruturar dados, e, eles fornecem um desempenho
	rápido para acessá-los. Ao longo do resto destes desafios, descreveremos
	diversas operações que você pode executar em objetos, com a finalidade de
	torná-lo confortável ao usar essas estruturas de dados úteis em seus
	programas.

	Nos desafios anteriores, nós adicionamos e modificamos os pares de
	chave-valor de objetos. Aqui veremos como podemos remover uma chave-valor
	de um obeto.

	Vamos revisitar nosso objeto de exemplo foods uma última vez. Se quisermos
	remover a chave apples, podemos removê-lo usando a palavra-chave delete
	assim:

	delete foods.apples;

	Use a palavra-chave delete para remover as chaves oranges, plums e
	strawberries do objeto foods.

*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Altere apenas o código abaixo desta linha
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Altere apenas o código acima desta linha

console.log(foods); // { apples: 25, bananas: 13, grapes: 35 }
