/*
	Encadear instruções if else

	Instruções if/else podem ser encadeadas por uma lógica complexa. Aqui está 
	o pseudocódigo de várias instruções encadeadas if/else if:

	if (condition1) {
	  statement1
	} else if (condition2) {
	  statement2
	} else if (condition3) {
	  statement3
	. . .
	} else {
	  statementN
	}
*/
// 

function testSize(num) {
	// body...
	if (num < 10) {
		return 'Tiny';
	} else if (num < 15) {
		return 'Small';
	} else if (num < 20) {
		return 'Large';
	} else if (num >= 20) {
		return 'Huge';
	}
	return 'Change Me';
}

const result = testSize(3);
console.log(result);