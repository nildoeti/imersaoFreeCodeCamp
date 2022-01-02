/*
    Usar o operador condicional (ternário)

    O operador condicional, também chamado de operador ternário, pode ser usado 
    como uma expressão if-else de uma linha.

    A sintaxe é a ? b : c, onde a é a condição, b é o código executado quando a 
    condição retorna true e c é o código executado quando a condição 
    retorna false.

    A função a seguir usa a instrução if/else para verificar uma condição:

    function findGreater(a, b) {
    if(a > b) {
        return "a is greater";
    }
    else {
        return "b is greater or equal";
    }
    }

    Isto pode ser reescrito usando o operador condicional:

    function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
    }
*/
// exemplo 1 com operador if/else
function findGreater(a, b) {
    if (a > b) {
        return 'a is greater';
    } else {
        return 'b is greater or equal';
    }
} 

// exemplo 2 com uso do operador tenário para o exemplo acima
function findGreater(a, b) {
    return a > b? 'a is greater' : 'b is greater or equal';
}
