/*
	Retornar valores booleanos das funções

	Você pode se lembrar de Comparação com o operador de igualdade, em que todos 
	os operadores de comparação retornam um valor booleano true ou false.

	Às vezes, as pessoas usam uma instrução if/else para fazer uma comparação, 
	dessa forma:

	function isEqual(a, b) {
	  if (a === b) {
	    return true;
	  } else {
	    return false;
	  }
	}

	Mas há uma forma melhor de fazer isso. Já que === retorna true ou false, 
	podemos retornar o resultado da comparação:

	function isEqual(a, b) {
	  return a === b;
	}
*/


// exemplo de comparação com o operador de igualdade com if/else
function isEqual(a, b) {
	// body...
	if (a === b) {
		return true;
	} else {
		return false;
	}
}

// exemplo de comparação com o operador de igualdade sem if/else
function isEqual(a, b) {
	return a === b;
}

// exemplo 1 na prática
function isLess(a, b) {
	return a === b;
}