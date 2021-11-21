/*
    Usar notação de colchetes para encontrar o enésimo caractere em uma string

    Você também pode usar notação de colchetes para pegar caracteres em outras 
    posições em uma string.

    Lembre-se de que computadores começam contando do 0. Então, o primeiro 
    caractere é na verdade o caractere na posição 0.

    Exemplo:

    const firstName = "Ada";
    const secondLetterOfFirstName = firstName[1];

    secondLetterOfFirstName teria o valor da string d.

    Vamos tentar definir thirdLetterOfLastName para ser igual a terceira letra 
    da variável lastName usando notação de colchetes.
*/

const lastName = 'Lovelace';
const thirdLetterOfLastName = lastName[2];

console.log(thirdLetterOfLastName);