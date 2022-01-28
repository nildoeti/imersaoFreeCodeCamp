/*
	Capturar abertura e fechamento de parênteses faltantes após uma chamada de
	função

	Quando uma função ou método não recebe nenhum parâmetro, você pode esquecer
	de incluir a abertura e fechamento de parênteses (vazio) ao chamá-la.
	Frequentemente, o resultado de uma chamada de função é salva em uma
	variável para outro uso em seu código. Esse erro pode ser detectado ao
	exibir no console os valores das variáveis (ou seus tipos) e verificar que
	uma variável está definida para uma referência de uma função, ao invés do
	valor esperado que a função retorna.

	As variáveis no seguinte exemplo são diferentes:

	function myFunction() {
	  return "You rock!";
	}
	let varOne = myFunction;
	let varTwo = myFunction();

	Aqui varOne é a função myFunction e varTwo é a string You rock!.
*/

// exemplo 1
function myFunction() {
	return 'you rock';
}

let varOne = myFunction; // varOne é a função myFunction
let varTwo = myFunction(); // varTwo é a string You rock!



/*
	Corrija o código para que a variável result seja definida para o valor
	retornado da chamada da função getNine.
*/

// antes
// function getNine() {
//   let x = 6;
//   let y = 3;
//   return x + y;
// }

// let result = getNine;
// console.log(result);

// depois
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine(); // uso de (), para retorno da funcao
console.log(result);
