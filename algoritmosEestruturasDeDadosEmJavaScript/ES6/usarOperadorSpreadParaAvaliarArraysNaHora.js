/*
    Usar o operador spread para avaliar arrays na hora

    ES6 introduz o operador spread, o qual nos permite expandir arrays e outras 
    expressões no lugar aonde é esperado diversos parâmetros ou elementos.

    O código em ES5 abaixo usa apply() para calcular o valor máximo de um array:

    var arr = [6, 89, 3, 45];
    var maximus = Math.max.apply(null, arr);

    maximus teria o valor de 89.

    Tivemos de usar Math.max.apply(null, arr) porque 
    Math.max(arr) retorna NaN. Math.max() espera argumentos separados por 
    vírgula, mas não um array. O operador spread torna essa sintaxe muito mais 
    legível e mais fácil de manter.

    const arr = [6, 89, 3, 45];
    const maximus = Math.max(...arr);

    maximus teria o valor de 89.

    ...arr retorna um array descompactado. Em outras palavras, ele espalha 
    (spreads) o array. No entanto, o operador spread apenas funciona no local, 
    como em um argumento para uma função ou em um array literal. O código a 
    seguir não funcionará:

    const spreaded = ...arr;

*/
// exemplo 1
let arr = [1, 2, 3, 4, 5]
let result1 = Math.max.apply(arr);
console.log(result1); //-Infinity

let arr2 = [1, 2, 3, 4, 5];
let result2 = Math.max.apply(null);
console.log(result2); // -Infinity

let arr3 = [1, 2, 3, 4, 5];
let result3 = Math.max.apply(null, arr3);
console.log(result3); // 5


// uso de sintaxe de espalhamento spread
let arr4 = [4, 5, 3, 64, -9, 0, 1];
const maximus = Math.max(...arr4);
console.log(maximus); // 64

let arr5 = [4, -9, 0, 55, 3];
const minimus = Math.min(...arr5);
console.log(minimus); // -9


// aplicação 1
function howMany(...args) {
    return 'you have passed ' + args.length + ' arguments';
}

const result7 = howMany(3, 6, 5);
const result8 = howMany(3, 'string', {}, [4, 3], 5, [[3], 6, 5])
console.log(result7);
console.log(result8);

