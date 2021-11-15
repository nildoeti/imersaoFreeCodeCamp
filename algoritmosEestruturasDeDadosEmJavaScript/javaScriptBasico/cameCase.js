/**
    Em JavaScript todas os nomes de variáveis e funções são sensíveis a caracteres
    maiúsculos e minúsculos. Isso significa que a capitalização importa.

    MYVAR não é o mesmo que MyVar nem myvar. É possível ter diversas variáveis
    distintas com o mesmo nome mas com capitalização diferente. É extremamente
    recomendado pelo bem da clareza, que você não use esse recurso da linguagem.


    Escreva nomes de variáveis em JavaScript em camelCase. Em camelCase, nomes
    de variáveis com mais de uma palavra possuem a primeira palavra toda em
    minúscula e a primeira letra de cada palavra subsequente capitalizada.
*/

// declaração de variáveis
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// atribuição de variáveis
studlyCapVar = 10;
properCamelCase = 'A string';
titleCaseOver = 9000;

console.log(`${studlyCapVar} - ${properCamelCase} - ${titleCaseOver}`);
