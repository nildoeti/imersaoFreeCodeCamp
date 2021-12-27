/*
	Acessar propriedades de objeto com notação de colchetes

	A segunda forma para acessar as propriedades de um objeto é a notação de 
	colchetes ([]). Se a propriedade do objeto que você está tentando acessar 
	possui um espaço no seu nome, você precisará usar a notação de colchetes.

	No entanto, você ainda pode usar a notação de colchetes nas propriedades 
	dos objetos sem espaços.

	Aqui está um exemplo usando a notação de colchetes para ler uma propriedade 
	de um objeto:

	const myObj = {
	  "Space Name": "Kirk",
	  "More Space": "Spock",
	  "NoSpace": "USS Enterprise"
	};

	myObj["Space Name"];
	myObj['More Space'];
	myObj["NoSpace"];

	myObj["Space Name"] seria a string Kirk, myObj['More Space'] seria a string 
	Spock e myObj["NoSpace"] seria a string USS Enterprise.

	Note que os nomes das propriedades com espaços neles precisam estar entre 
	aspas (simples ou duplas).
*/

// exemplo 1
const myObj = {
	'Space Name': 'Kirk',
	'More Space': 'Spock',
	'NoSpace': 'USS Enterprise'
};

const myObjPropSpace = myObj['Space Name'];
const myObjMoreSpace = myObj['More Space'];
const myObjNoSpace = myObj['NoSpace'];

console.log(myObjPropSpace + ' => ' +  myObjMoreSpace + ' => ' + myObjNoSpace);