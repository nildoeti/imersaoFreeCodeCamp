/**
     * Gerar números inteiros aleatórios dentro de um intervalo

    Ao invés de gerar um número inteiro aleatório entre 0 e um número 
    especificado, como fizemos anteriormente, nós podemos gerar um número 
    inteiro aleatório que fica em um intervalo entre dois números especificados.

    Para isso, definiremos um número mínimo min e um número máximomax.

    Aqui está a fórmula que usaremos. Leve um momento para ler e entender o 
    que esse código está fazendo:

    Math.floor(Math.random() * (max - min + 1)) + min
 */

// exemplo 1
const result1 = Math.floor(8.6);
console.log(result1); // 8

// exemplo 2
function minMax(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * max - min);
}

const result2 = minMax(4, 7);
console.log(result2);

/**
 * Crie uma função chamada randomRange que recebe um intervalo de myMin e 
 * myMax e retorne um número inteiro aleatório que é maior ou igual a myMin, e 
 * é menor ou igual a myMax.
 */

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - minMax + 1) + myMin); 
}

// console.log(randomRange());