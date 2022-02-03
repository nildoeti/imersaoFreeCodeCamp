/*
	Fatorar um número

	Retorne o fatorial do inteiro fornecido.
	Se o inteiro é representado com a letra n, o fatorial é o produto de todos
	os inteiros positivos menores ou iguais a n.
	Fatoriais são frequentemente representados com a notação abreviada n!

	Por exemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

	Apenas números inteiros maiores ou iguais a zero serão fornecidos para a
	função.

*/
// solução 1
// function factorialize(num) {
//   let product = 1;
//   for (let i = 2; i <= num; i++) {
//     product *= i;
//   }
//   return product;
// }

// factorialize(5);

// solução 2
// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }

// factorialize(5);

// solução 3
function factorialize(num, factorial = 1) {
  if (num === 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

factorialize(5);

