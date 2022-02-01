/*
	Adicionar pares de chave-valor a objetos JavaScript

	Em suas formas mais básicas, objetos são apenas coleções de pares de
	chave-valor. Em outras palavras, eles são pedaços de dados (valores)
	mapeados para identificadores únicos chamados propriedades (chaves). Dê uma
	olhada no exemplo:

	const tekkenCharacter = {
	  player: 'Hwoarang',
	  fightingStyle: 'Tae Kwon Doe',
	  human: true
	};

	O código acima define um objeto de personagens do jogo de videogame Tekken
	chamado tekkenCharacter. Tem três propriedades, em que cada uma é mapeada
	para um valor específico. Se você quer adicionar uma propriedade adicional,
	como "origin", isso pode ser feito atribuindo origin ao objeto:

	tekkenCharacter.origin = 'South Korea';

	Isso usa a notação de ponto. Se você observar o objeto tekkenCharacter, ele
	agora incluirá a propriedade origin. Hwoarang também tinha cabelos cor de
	laranja, bem diferentes. Você pode adicionar essa propriedade com notação
	de colchetes fazendo:

	tekkenCharacter['hair color'] = 'dyed orange';

	A notação de colchete é necessária se sua propriedade tem um espaço nela ou
	se você deseja usar uma variável para nomear a propriedade. No caso acima,
	a propriedade está entre aspas para denotá-la como uma string e será
	adicionada exatamente como mostrada. Sem aspas, ela será avaliada como uma
	variável e o nome da propriedade será qualquer valor que a variável for.
	Aqui está um exemplo com uma variável:

	const eyes = 'eye color';

	tekkenCharacter[eyes] = 'brown';

	Após adicionar todos os exemplos, o objeto ficará assim:

	{
	  player: 'Hwoarang',
	  fightingStyle: 'Tae Kwon Doe',
	  human: true,
	  origin: 'South Korea',
	  'hair color': 'dyed orange',
	  'eye color': 'brown'
	};
*/

// exemplo 1 de objetos em javascript
const tekkenCharacter = {
	player: 'Hwoarang',
	fightingStyle: 'Tae Kwon Doe',
	human: true
};
tekkenCharacter.origin = 'South Korea';
tekkenCharacter['hair color'] = 'dyed orange';
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';

console.log(tekkenCharacter)
