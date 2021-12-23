/*
	Usar a ordem lógica em instruções if else

	A ordem é importante em instruções if e else if.

	A função é executada de cima para baixo, então você deve ser cuidadoso com 
	qual instrução vem primeiro.

	Tomemos como exemplo estas duas funções.

	Aqui está a primeira:

	function foo(x) {
	  if (x < 1) {
	    return "Less than one";
	  } else if (x < 2) {
	    return "Less than two";
	  } else {
	    return "Greater than or equal to two";
	  }
	}

	A segunda apenas altera a ordem das instruções if e else if:

	function bar(x) {
	  if (x < 2) {
	    return "Less than two";
	  } else if (x < 1) {
	    return "Less than one";
	  } else {
	    return "Greater than or equal to two";
	  }
	}

	Embora as duas funções pareçam praticamente idênticas, se passarmos um 
	número para ambas, teremos saídas diferentes.

	foo(0)
	bar(0)

	foo(0) retornará a string Less than one e bar(0) retornará a string Less than two.

*/

// primeiro exemplo
function foo(x) {
	if (x < 1) { // do menor
		return 'Less than one';
	} else if (x < 2) { // para o maior
		return 'Less than two';
	} else {
		return 'Greater than or equal to two.'
	}
}

const result1 = foo(0);
console.log(result1); // Less than one


// segundo exemplo
function bar(x) {
	if (x < 2) { // do maior
		return 'Less than two';
	} else if (x < 1) { // para o menor
		return 'Less than two.';
	} else {
		return 'Greater than or equal to two.';
	}
}

const result2 = bar(0);
console.log(result2); // Less than two

