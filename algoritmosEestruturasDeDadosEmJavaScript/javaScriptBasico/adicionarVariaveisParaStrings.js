/*
    Adicionar variáveis para strings

    Assim como podemos construir uma string em várias linhas através das strings
    literais, nós também podemos adicionar as variáveis para a string usando o
    operador mais igual (+=).

    Exemplo:

    const anAdjective = "awesome!";
    let ourStr = "freeCodeCamp is ";
    ourStr += anAdjective;

    ourStr teria o valor freeCodeCamp is awesome!.

    Defina someAdjective para uma string de pelo menos 3 caracteres e adicione
    para myStr usando o operador +=.

*/

const someAdjective = 'good';
let myStr = 'Learning to code is ';
myStr += someAdjective;
console.log(myStr);
