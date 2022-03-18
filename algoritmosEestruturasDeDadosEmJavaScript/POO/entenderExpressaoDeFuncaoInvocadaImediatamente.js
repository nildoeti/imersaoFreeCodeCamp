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
})();
