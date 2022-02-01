/*
	Criar arrays multidimensionais complexos

	Excelente! Você acabou de aprender muito sobre arrays! Esta foi uma visão
	geral de nível bastante elevado, e há muito mais a aprender para trabalhar
	com arrays. Muitas dessas questões você verá em sessões posteriores. Mas
	antes de passarmos a examinar os objetos, vamos dar mais uma olhada e ver
	como os arrays podem se tornar um pouco mais complexos do que aquilo que
	vimos nos desafios anteriores.

	Uma das características mais poderosas ao pensar em arrays como estruturas
	de dados é que arrays podem conter, ou mesmo ser completamente compostos
	por outros arrays. Vimos arrays que contêm arrays em desafios anteriores,
	mas que são bastante simples. No entanto, os arrays podem conter uma
	profundidade infinita de arrays que podem conter outros arrays, cada um
	com seus próprios níveis arbitrários de profundidade, e assim por diante.
	Desta forma, um array pode muito rapidamente se tornar uma estrutura de
	dados muito complexa, conhecida como array multidimensional ou array
	aninhado. Considere o seguinte exemplo:

	let nestedArray = [
	  ['deep'],
	  [
	    ['deeper'], ['deeper']
	  ],
	  [
	    [
	      ['deepest'], ['deepest']
	    ],
	    [
	      [
	        ['deepest-est?']
	      ]
	    ]
	  ]
	];

	O array deep está aninhado com 2 níveis de profundidade. Os arrays deeper
	têm 3 níveis de profundidade. Os arrays deepest têm 4 níveis, e os
	deepest-est? têm 5 níveis.

	Embora este exemplo possa parecer complicado, este nível de complexidade
	não é inédito, ou ainda fora do normal, em se tratando de grandes
	quantidades de dados. Entretanto, nós ainda podemos facilmente acessar os
	níveis mais profundos de um array complexo com a notação de colchetes:

	console.log(nestedArray[2][1][0][0][0]);

	Isso exibe no console a string deepest-est?. Agora que sabemos onde esse
	pedaço de dado está, nós podemos redefini-lo se precisarmos:

	nestedArray[2][1][0][0][0] = 'deeper still';

	console.log(nestedArray[2][1][0][0][0]);

	Agora, ele mostra no console deeper still.

*/

let nestedArray = [
	['deep'],
	[
	  ['deeper'], ['deeper'] 
	],
	[
	  [
		['deepest'], ['deepest']
	  ],
	  [
		[
		  ['deepest-est?']
		]
	  ]
	]
  ];

// acesso por nível de colchetes
console.log(nestedArray[2][1][0][0][0]); // deepest-est?

// redefinir o array
nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);
