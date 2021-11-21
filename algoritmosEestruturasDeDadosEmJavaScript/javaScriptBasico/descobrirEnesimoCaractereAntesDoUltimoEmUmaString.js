/*
    Usar notação de colchetes para descobrir o enésimo caractere antes do último 
    em uma string

    Você pode usar o mesmo princípio que nós acabamos de usar para recuperar o 
    último caractere em uma string, para recuperar o enésimo caractere antes do 
    último caractere.

    Por exemplo, você pode pegar o valor da antepenúltima letra da string const 
    firstName = "Augusta" usando firstName[firstName.length - 3]

    Exemplo:

    const firstName = "Augusta";
    const thirdToLastLetter = firstName[firstName.length - 3];

    thirdToLastLetter teria o valor da string s.
*/

const lastName = 'Lovelace';
const secondToLastLetterOfLastName = lastName[lastName.length -2];

console.log(secondToLastLetterOfLastName);