/**
    Quando as variáveis de JavaScript são declaradas, elas têm um valor inicial
    de undefined. Se você fizer uma operação matemática em uma variável
    undefined, seu resultado será NaN, o que significa que "Não é um número". Se
     você concatenar uma string com uma variável undefined, você receberá uma
     string literal de undefined.
*/

var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1;
b + b + 5;
c = c + ' String!';

console.log(a);
console.log(b);
console.log(c);
