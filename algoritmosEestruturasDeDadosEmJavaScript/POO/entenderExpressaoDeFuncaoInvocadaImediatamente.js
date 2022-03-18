/*
    Entender a expressão de função invocada imediatamente (IIFE)

    Um padrão comum em JavaScript é executar a função assim que ela é declarada:

    (function () {
    console.log("Chirp, chirp!");
    })();

    Essa é uma expressão de função anônima que executa logo após ser declarada,
    e exibe imediatamente no console Chirp, chirp!.

    Note que a função não possui nome e não é armazenada em uma variável. Os
    dois parênteses () ao final da expressão da função faz com que ela seja
    imediatamente executada ou invocada. Este padrão é conhecido como immediately
    invoked function expression (expressão de função invocada imediatamente)
    ou IIFE.

*/

(function() {
    console.log('Chirp, chirp');
})(); // expressão de função invocada imediatamente) ou IIFE


/*
    Desafio
    Rescreva a função makeNest e remova a chamada a ela para que no lugar seja
    uma expressão de função imediatamente invocada (IIFE) anônima.
*/

// function makeNest() {
//     console.log('A cozy nest is read');
// }

// makeNest();
(function(){
    console.log('A cozy nest is read');
})();