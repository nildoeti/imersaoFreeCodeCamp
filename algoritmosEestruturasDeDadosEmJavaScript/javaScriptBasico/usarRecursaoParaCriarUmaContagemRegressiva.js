/*
    Usar recursão para criar uma contagem regressiva

    Em um desafio anterior, você aprendeu como usar recursão para substituir 
    laços for. Agora, vamos analisar uma função mais complexa, a qual retorna 
    um array de inteiros consecutivos começando com 1 até o número passado para 
    a função.

    Como mencionado no desafio anterior, haverá um caso de base. O caso de base
    diz a função recursiva quando ela não precisa mais chamar a si. É um simples 
    caso onde o valor de retorno já é conhecido. Também haverá uma chamada 
    recursiva, a qual executa a função original com argumentos diferentes. Se a 
    função for escrita corretamente, eventualmente o caso de base será 
    alcançado.

    Por exemplo, vamos dizer que você quer escrever uma função recursiva que 
    retorna um array contendo os números de 1 até n. Essa função precisará 
    aceitar um argumento, n, representando o número final. Então, ela precisará 
    chamar a si mesma com valores progressivamente menores, começando em n até 
    chegar a 1. Você poderia escrever a função da seguinte forma:

    function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
    }
    console.log(countup(5));

    O valor [1, 2, 3, 4, 5] será exibido no console.

    Inicialmente, isso parece contraintuitivo já que o valor de n diminui, mas 
    os valores no array final estão em ordem crescente. Isso acontece porque a 
    adição no array (push) acontece por último, após a chamada recursiva ter 
    retornado. No ponto onde n é adicionado ao array, countup(n - 1) já foi 
    avaliado e retornou [1, 2, ..., n -1].
*/

// exemplo 1
// function countup(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         // aqui é a chamada da função recursiva
//         const countArray = countup(n -1);
//         countArray.push(n);
//         return countArray;
//     }
// }

// console.log(countup(5));

// exemplo 2
// const myArray = (number) => {
//     if (number < 1) {
//         return `${number} é menor que 1`;
//     } else {
//         // aqui é a chamada da função recursiva
//         const ourArray = myArray(number - 1);
//         ourArray.push(number);
//         return ourArray
//     }
// }

// console.log(myArray(0));

// exemplo 3
// const myArray2 = (number) => {
//     if (number === 0) {
//         return `${number} é igual a zero`;
//     } else if (number < 0) {
//         return `${number}  é menor que zero`;
//     } else {
//         // aqui é a chamada da função recursiva
//         const ourArray = myArray2(number - 1); 
//         ourArray.push(number);
//         return ourArray
//     }
// }

// console.log(myArray2(1));


/*
    Definimos uma função chamada countdown com um parâmetro (n). A função deve 
    usar recursão para retornar um array contendo inteiros n até 1 com base no 
    parâmetro n. Se a função é chamada com um número menor que 1, a função deve 
    retornar um array vazio. Por exemplo, chamar essa função com n = 5 deve 
    retornar o array [5, 4, 3, 2, 1]. Sua função precisa usar recursão para 
    chamar a si mesma e não depender de nenhum tipo de laço.
*/

// solução 1
// function countdown(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const err = countdown(n - 1);
//         err.unshift(n);
//         return err;
//     }
// }

// console.log(countdown(5));

// solução 2
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.splice(0, 0, n);
        return arr;
    }
}

console.log(countdown(5));
