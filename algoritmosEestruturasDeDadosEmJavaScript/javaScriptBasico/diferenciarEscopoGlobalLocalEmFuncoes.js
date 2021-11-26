/*
	Diferenciar escopo global e local em funções

	É possível ter as variáveis local e global com o mesmo nome. Quando você 
	faz isso, a variável local tem precedência sobre a variável global.

	Neste exemplo:

	const someVar = "Hat";

	function myFun() {
	  const someVar = "Head";
	  return someVar;
	}

	A função myFun retornará a string Head porque a versão local da variável 
	está presente.

	Adicione uma variável local para a função myOutfit para sobrescrever o valor 
	de outerWear com a string sweater.

*/

//  variável local
const someVar = 'Hat';

// exemplo 1
function myFun() {
	const someVar = 'Head';
	console.log(someVar);
}

myFun(); // chama a variável local someVar 
console.log(someVar); // chama a variável global

// exemplo 2
const outearWear = 'T-Shirt';

function myOutFit() {
	// body...
	const outearWear = 'sweater';
	return outearWear;
}

myOutFit();
