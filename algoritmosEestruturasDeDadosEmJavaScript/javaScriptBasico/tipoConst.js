/**
    Declarar variáveis somente de leitura com a palavra-chave const

    A palavra-chave let não é a única nova forma de declarar variáveis. Na
    versão ES6, você também pode declarar variáveis usando a palavra-chave
    const.

    const possui todos os recursos maravilhosos que let tem, com o bônus
    adicional que variáveis declaradas usando const são somente de leitura. Elas
    têm um valor constante, o que significa que a variável atribuída com const
    não pode ser atribuída novamente:

    const FAV_PET = "Cats";
    FAV_PET = "Dogs";

    O console vai exibir um erro devido à reatribuição do valor de FAV_PET.

    Você sempre deve nomear variáveis que você não quer reatribuir, usando a
    palavra-chave const. Isso ajuda quando você acidentalmente tenta reatribuir
    uma variável que deveria ser constante.

    Uma prática comum ao nomear constantes é colocar todas as letras em
    maiúsculas, com palavras separadas por sublinhado (underscore).

    Observação: é comum que os desenvolvedores usem nomes de variáveis
    maiúsculas para valores imutáveis e minúsculas ou camelCase para valores
    mutáveis (objetos e arrays). Você aprenderá mais sobre objetos, arrays e
    valores imutáveis e mutáveis em desafios futuros. Em desafios posteriores,
    você também verá exemplos de identificadores de variáveis maiúsculas,
    minúsculas ou em camelCase.
*/
// exemplo 1
// const FAV_PET = 'Cats';
// FAV_PET = 'Dogs';
// console.log(FAV_PET); // não se altera o valor de uma variável const

// exemplo 2
const FCC = 'freeCodeCampo ';
let fact = 'is cool!';
fact = 'is awesome!';
console.log(FCC, fact);
