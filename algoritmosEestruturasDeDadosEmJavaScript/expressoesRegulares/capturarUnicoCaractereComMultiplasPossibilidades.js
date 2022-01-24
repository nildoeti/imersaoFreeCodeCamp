/*
	Capturar um único caractere com múltiplas possibilidades

	Você aprendeu a capturar padrões literais (/literal/) e usar o caractere
	curinga (/./). Eles são os extremos das expressões regulares: um encontra o
	texto exato e o outro captura qualquer coisa. Existem formas de balancear
	esses extremos.

	Você pode ter alguma flexibilidade ao procurar um padrão literal usando
	classes de caracteres. Classes de caracteres permitem a definição de grupos
	de caracteres que você quer capturar ao colocá-los entre colchetes: [ e ].

	Por exemplo, se você quiser encontrar bag, big e bug mas não bog. Você pode
	escrever a regex /b[aiu]g/ para isso. [aiu] é a classe de caracteres que só
	capturará a, i ou u.

	let bigStr = "big";
	let bagStr = "bag";
	let bugStr = "bug";
	let bogStr = "bog";
	let bgRegex = /b[aiu]g/;
	bigStr.match(bgRegex);
	bagStr.match(bgRegex);
	bugStr.match(bgRegex);
	bogStr.match(bgRegex);

	As quatro chamadas a match retornarão os seguintes valores, nesta ordem:
	["big"], ["bag"], ["bug"] e null.
*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";

let bgRegex = /b[iau]g/;

let result1 = bigStr.match(bgRegex);
let result2 = bagStr.match(bgRegex);
let result3 = bugStr.match(bgRegex);
let result4 = bogStr.match(bgRegex);

console.log(result1); // big
console.log(result2); // bag
console.log(result3); // bug
console.log(result4); // null


/*
	Use classe de caracteres de vogais (a, e, i, o, u) na sua regex vowelRegex
	para encontrar todas as vogais na string quoteSample.

	Observação: você quer encontrar tanto maiúsculas quanto minúsculas.
*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /change/; // Altere esta linha
let vowelRegex = /b[aeiou]/gi;
let result5 = quoteSample.match(vowelRegex); // Altere esta linha
console.log(result5);
