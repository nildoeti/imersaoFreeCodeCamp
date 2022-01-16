/*
	Escrever declarações literais de objetos concisas usando a forma abreviada
	de propriedade de objeto

	ES6 adiciona alguns suportes legais para facilmente definir literais de
	objetos.

	Considere o seguinte código:

	const getMousePosition = (x, y) => ({
	  x: x,
	  y: y
	});

	getMousePosition é uma função simples que retorna um objeto contendo duas
	propriedades. ES6 fornece o açúcar sintático para eliminar a redundância de
	ter de escrever x: x. Você pode simplesmente escrever x uma vez, e será
	convertido para x: x (ou algo equivalente). Aqui está a mesma função que
	acima rescrita para usar a nova sintaxe:

	const getMousePosition = (x, y) => ({ x, y });

*/

 // exemplo simples de declaracao de literais em objetos javascript
 // const getMousePosition = (x, y) => ({
 // 	x: x,
 // 	y: y
 // });

 // reescrita da funcao acima com nova sintaxe
 const getMousePosition = (x, y) => ({x, y});
