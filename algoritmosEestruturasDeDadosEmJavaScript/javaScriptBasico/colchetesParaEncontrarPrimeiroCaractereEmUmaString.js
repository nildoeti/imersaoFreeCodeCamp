/*
    Usar notação de colchetes para encontrar o primeiro caractere em uma string

    Notação de colchetes é uma forma de pegar um caractere no índice
    especificado dentro de uma string.

    A maioria das linguagens de programação modernas, como JavaScript, não
    começa contando do 1 como humanos fazem. Elas começam no 0. Isso é referido
    como indexação baseada em zero.

    Por exemplo, o caractere no índice 0 da palavra Charles é C. Então, se const
    firstName = "Charles", você pode pegar o valor da primeira letra da string
    usando firstName[0].

    Exemplo:

    const firstName = "Charles";
    const firstLetter = firstName[0];

    firstLetter teria o valor da string C.

    Use notação de colchetes para encontrar o primeiro caractere na variável
    lastName e atribua a letra para a variável firstLetterOfLastName.

    Dica: tente olhar o exemplo acima se você ficar travado.

*/

let firstLetterOfLastName = '';
const lastName = 'Lovelace';

firstLetterOfLastName = lastName[0];

console.log(firstLetterOfLastName);