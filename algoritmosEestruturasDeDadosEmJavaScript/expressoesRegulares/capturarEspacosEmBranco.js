/*
	Capturar espaços em branco

	Os desafios até agora cobriram a captura de letras do alfabeto e números.
	você também pode capturar espaços em branco e os espaços entre as letras.

	Você pode usar o atalho \s com um s minúsculo para capturar espaços em
	branco. Este atalho não captura apenas espaços em branco como também
	retorno de carro, tabulações, feeds de formulário e quebras de linha. O
	atalho é equivalente à classe de caracteres [ \r\t\f\n\v].

	let whiteSpace = "Whitespace. Whitespace everywhere!"
	let spaceRegex = /\s/g;
	whiteSpace.match(spaceRegex);

	match retorna [" ", " "] aqui.

*/

let whiteSpace = 'Whitespace. Whitespace everywhere!';
let spaceRegex = /\s/g;

console.log(whiteSpace.match(spaceRegex)); // [ ' ', ' ' ]

