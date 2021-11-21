/*
    Usar notação de colchetes para encontrar o último caractere em uma string

    Para pegar a última letra de uma string, você pode subtrair um do tamanho 
    da string.

    Por exemplo, se const firstName = "Ada", você pode pegar o valor da última 
    letra da string ao usar firstName[firstName.length - 1].

    Exemplo:

    const firstName = "Ada";
    const lastLetter = firstName[firstName.length - 1];

    lastLetter teria o valor da string a.

    Use notação de colchetes para descobrir o último caractere na variável 
    lastName.
*/

const lastName = 'Lovelace';
const lastLetterOfLastNAme = lastName[lastName.length - 1];

console.log(lastLetterOfLastNAme);