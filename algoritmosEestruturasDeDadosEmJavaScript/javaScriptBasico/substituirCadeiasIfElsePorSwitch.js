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
// function myFun(val) {
// 	let answer = '';
// 	switch(val) {
// 		case 1:
// 			answer = 'a';
// 			break;
// 		case 2:
// 			answer = 'b';
// 			break;
// 		default:
// 			answer = 'c';
// 	}
// }


// exemplo de função com else/if 
// function chainToSwitch(val) {
// 	let answer = '';
// 	if (val === 'bob') {
// 		answer = 'Marley';
// 	} else if (val === 42) {
// 		answer = 'The answer';
// 	} else if (val === 1) {
// 		answer = 'There is no #1';
// 	} else if (val === 99) {
// 		answer = 'Missed me by this mush.';
// 	} else if (val === 9) {
// 		answer = 'By Bob';
// 	} else {
// 		answer = 'Good By.';
// 	}
// }

// const result = chainToSwitch(1);
// console.log(result);

// exemplo de chainToSwitch com switch
const chainToSwitch = (val) => {
	let answer = '';

	switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
	}
}

const result = chainToSwitch(1);
console.log(result);