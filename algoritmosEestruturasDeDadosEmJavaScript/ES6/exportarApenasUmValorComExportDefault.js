/*
	Exportar apenas um valor com export default

	Na lição de export você aprendeu sobre a sintaxe que chamamos de exportação
	nomeada. Naquela lição você exportou múltiplas funções e variáveis que
	ficaram disponíveis para utilização em outros arquivos.

	Há outra sintaxe para export que você precisa saber, conhecida como
	exportação padrão. Você usará essa sintaxe quando apenas um valor estiver
	sendo exportado de um arquivo ou módulo. Essa sintaxe também é usada para
	exportar um valor substituto caso o valor original não possa ser exportado.

	Abaixo estão exemplos utilizando a sintaxe export default:

	export default function add(x, y) {
	  return x + y;
	}

	export default function(x, y) {
	  return x + y;
	}

	O primeiro exemplo é uma função nomeada e o segundo é uma função anônima.

	A sintaxe export default é usada para exportar um único valor de um arquivo
	ou módulo. Tenha em mente que você não pode usar o export default com var,
	let ou const
*/

// 	exemplo de função nomeada
// export default function add(x, y) {
	// return x + y;
// }

// exemplo de função anônima
// export default function(x, y) {
// 	return x + y;
// }

/*
	Desafio
	A função a seguir deve ser o único valor a ser exportado. Adicione o código
	necessário para que apenas um valor seja exportado.
*/

export default function subtract(x, y) {
	return x - y;
}

