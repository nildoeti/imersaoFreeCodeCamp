/*
	Adicionar uma opção padrão em instruções switch

	Na instrução switch, você não deve ser capaz de especificar todos os 
	possíveis valores como instruções case. Ao invés disso, você pode adicionar 
	a instrução default, que será executada se nenhuma instrução case 
	correspondente for encontrada. Pense nisso como a instrução final else em 
	uma cadeia de if/else.

	A instrução default deve ser o último caso.

	switch (num) {
	  case value1:
	    statement1;
	    break;
	  case value2:
	    statement2;
	    break;
	...
	  default:
	    defaultStatement;
	    break;
	}


	Escreva a instrução switch para definir answer para as seguintes condições:
	a - apple
	b - bird
	c - cat
	default - stuff
*/

// exemplo 1
// function switchOfStuff(val) {
// 	// body...
// 	let answer = '';

// 	switch(val) {
// 		case 'a':
// 			return answer = 'apple';
// 			break;
// 		case 'b':
// 			return answer = 'bird';
// 			break;
// 		case 'c':
// 			return answer = 'cat';
// 			break;
// 		default:
// 			return 'stuff';
// 	}
// 	return answer;

// }

// const result = switchOfStuff('a');
// console.log(result);

// exemplo 2
const switchOfStuff = (val) => {
	let answer = '';

	switch(val) {
		case 'a':
			return answer = 'apple';
			break;
		case 'b':
			return answer = 'bird';
			break;
		case 'c':
			return answer = 'cat';
			break;
		default:
			return 'stuff';
	}

	return answer;
}

const result = switchOfStuff('b');
console.log(result);