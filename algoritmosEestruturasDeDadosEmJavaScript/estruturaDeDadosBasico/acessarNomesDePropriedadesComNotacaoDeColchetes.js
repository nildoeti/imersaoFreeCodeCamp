/*
	Estruturas de dados básicas
	Acessar nomes de propriedades com notação de colchetes

	No primeiro desafio, nós mencionamos o uso da notação de colchetes como uma
	forma de acessar valores das propriedades usando a avaliação de uma
	variável. Por exemplo, imagine que nosso objeto foods está sendo usado em
	um programa para a caixa-registradora de um supermercado. Nós temos algumas
	funções que definem selectedFood e nós queremos checar a presença da
	selectedFood em nosso objeto foods. Isso pode parecer assim:

	let selectedFood = getCurrentFood(scannedItem);
	let inventory = foods[selectedFood];

	Esse código vai avaliar o valor armazenado na variável selectedFood e
	retorna o valor daquela chave no objeto foods, ou undefined se não estiver
	presente. Notação de colchetes é muito útil porque, às vezes, as
	propriedades de um objeto não são conhecidas antes da execução ou nós
	precisamos acessá-las de uma forma mais dinâmica.

*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Altere apenas o código abaixo desta linha
  return foods[scannedItem]
  // Altere apenas o código acima desta linha
}

console.log(checkInventory("apples"));
