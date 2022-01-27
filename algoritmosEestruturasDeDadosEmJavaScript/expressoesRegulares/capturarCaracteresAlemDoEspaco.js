/*
	Capturar caracteres além do espaço

	Você aprendeu a procurar por espaço em branco usando \s com um s minúsculo.
	Você também pode buscar tudo exceto espaços em branco.

	Busque não espaços em branco usando \S com um s maiúsculo. Este atalho não
	captura espaços em branco, retorno de carro, tabulações, feeds de
	formulário ou quebras de linha. O atalho é equivalente à classe de
	caracteres [^ \r\t\f\n\v].

	let whiteSpace = "Whitespace. Whitespace everywhere!"
	let nonSpaceRegex = /\S/g;
	whiteSpace.match(nonSpaceRegex).length;

	O valor retornado pelo método .length aqui é 32.
*/

// exemplo 1
let whiteSpace = 'Whitespace. Whitespace everywhere!';
let nonSpaceRegex = /\S/g;
console.log(whiteSpace.match(nonSpaceRegex).length); // 32

console.log(whiteSpace.match(nonSpaceRegex));
/*
	Saida para whiteSpace.match(nonSpaceRegex)
	[
	  'W', 'h', 'i', 't', 'e', 's',
	  'p', 'a', 'c', 'e', '.', 'W',
	  'h', 'i', 't', 'e', 's', 'p',
	  'a', 'c', 'e', 'e', 'v', 'e',
	  'r', 'y', 'w', 'h', 'e', 'r',
	  'e', '!'
	]
*/


/*
	Desafio
	Modifique a regex countNonWhiteSpace para que encontre tudo exceto espaços
	em branco em uma string.
*/

let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /change/; // Altere esta linha
let countNonWhiteSpace = /\S/g; // Altere esta linha
let result = sample.match(countNonWhiteSpace);
console.log(result);

/*
	Saida para sample.match(countNonWhiteSpace)
	[
	  'W', 'h', 'i', 't', 'e', 's', 'p',
	  'a', 'c', 'e', 'i', 's', 'i', 'm',
	  'p', 'o', 'r', 't', 'a', 'n', 't',
	  'i', 'n', 's', 'e', 'p', 'a', 'r',
	  'a', 't', 'i', 'n', 'g', 'w', 'o',
	  'r', 'd', 's'
	]

*/
