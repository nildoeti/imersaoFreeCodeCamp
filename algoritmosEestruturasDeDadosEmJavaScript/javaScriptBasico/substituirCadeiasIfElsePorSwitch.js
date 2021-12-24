/*
	Substituir cadeias de if else por switch

	Se você tiver muitas opções para escolher, uma instrução switch pode ser 
	mais fácil de escrever do que muitas instruções if/else if encadeadas. 
	O seguinte:

	if (val === 1) {
	  answer = "a";
	} else if (val === 2) {
	  answer = "b";
	} else {
	  answer = "c";
	}

	pode ser substituído por:

	switch(val) {
	  case 1:
	    answer = "a";
	    break;
	  case 2:
	    answer = "b";
	    break;
	  default:
	    answer = "c";
	}


*/

// exemplo com if
// const answer = '';
// function myFun(val) {
// 	if (val === 1) {
// 		answer = 'a';
// 	} else if (val === 2) {
// 		answer = 'b';
// 	} else {
// 		answer = 'c';
// 	}

// }

// pode ser substituído por:
function myFun(val) {
	let answer = '';
	switch(val) {
		case 1:
			answer = 'a';
			break;
		case 2:
			answer = 'b';
			break;
		default:
			answer = 'c';
	}
}
