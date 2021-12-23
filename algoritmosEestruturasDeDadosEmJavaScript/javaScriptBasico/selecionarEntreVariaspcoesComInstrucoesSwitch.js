/*
	Selecionar entre várias opções com instruções switch

	Se você possui muitas opções pra escolher, use uma instrução switch. Uma 
	instrução switch testa um valor e pode ter muitas instruções case as quais 
	definem os diversos valores possíveis. As instruções são executadas desde o 
	primeiro case correspondente até que seja encontrado um break.

	Aqui está um exemplo de uma instrução switch:

	switch(lowercaseLetter) {
	  case "a":
	    console.log("A");
	    break;
	  case "b":
	    console.log("B");
	    break;
	}

	Valores case são testados com o operador de igualdade estrita (===). O 
	break diz ao JavaScript parar interromper a execução das instruções. Se o 
	break for omitido, a próxima instrução case será executada.
*/

function caseInSwitch(val) {
	// body...
	// let answer = '';

	switch (val) {
		case 1:
			return 'alpha';
			break;
		case 2:
			return 'beta';
			break;
		case 3:
			return 'gamma';
			break;
		case 4:
			return 'delta';
			break;
	}

	return answer;
}

const result = caseInSwitch(1);
console.log(result);