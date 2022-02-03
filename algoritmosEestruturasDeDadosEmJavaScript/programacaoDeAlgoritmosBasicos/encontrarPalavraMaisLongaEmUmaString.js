/*
	Encontrar a palavra mais longa em uma string

	Retornar o comprimento da palavra mais longa na frase fornecida.
	Sua resposta deve ser um número.
*/

// solução 1
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


