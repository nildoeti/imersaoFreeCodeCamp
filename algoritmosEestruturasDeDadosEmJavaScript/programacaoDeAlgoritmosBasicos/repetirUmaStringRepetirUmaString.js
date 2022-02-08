/*
    Repetir uma string Repetir uma string
    Repita uma string passada str (primeiro argumento), num vezes
    (segundo argumento). Retorne uma string vazia se num não for um número
    positivo. Para o propósito do desafio, Não use o método integrado .repeat().
*/

// SOLUÇÃO 1
function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";

    for (let i = 0; i < num; i++) {
        accumulatedStr += str;
    }

    return accumulatedStr;
}
