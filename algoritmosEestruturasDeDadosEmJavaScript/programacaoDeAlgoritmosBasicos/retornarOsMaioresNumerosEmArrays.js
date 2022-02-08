/*
    Retornar os maiores números em arrays

    Retorna um array que consiste no maior número de cada sub-array fornecido.
    Por simplicidade, o array fornecido conterá exatamente 4 sub-arrays.

    Lembre-se: você pode iterar através de um array com um loop simples, e
    acesse cada membro com a sintaxe de array arr[i].
*/

// solução 1
// function largesOfFour(arr) {
//     let results = [];
//     for (let i = 0; i < arr.length; i++) {
//         let largestNumber = arr[i][0];
//         for (let j =1; j < arr[i.length]; j++) {
//             if (arr[i][j] > largestNumber) {
//                 largestNumber = arr[i][j];
//             }
//         }
//         results[i] = largestNumber;
//     }
//     return results;
// }

// solução 2
// function largestOfFour(arr) {
//     return arr.map(function(group) {
//         return group.reduce(function(prev, current) {
//             return current > prev ? current : prev;
//         });
//     });
// }


// solução 3
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}
