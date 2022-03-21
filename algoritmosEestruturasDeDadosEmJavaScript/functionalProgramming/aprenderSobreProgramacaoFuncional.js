/*
    Aprender sobre programação funcional

    Programação funcional é um estilo de programação em que as soluções são
    funções simples, isoladas e livres de efeitos colaterais fora do escopo
    da função: INPUT -> PROCESS -> OUTPUT

    Quando falamos de programação funcional, pensamos em:

        Funções isoladas: nenhuma função depende do estado do programa,
        incluindo variáveis globais, que podem sofrer mudanças

        Funções puras: a mesma entrada sempre devolve a mesma saída

        Funções com efeitos colaterais limitados: qualquer alteração ou mutação
        do estado do programa fora da função é cuidadosamente controlada



    Os membros do freeCodeCamp adoram chá.

    As funções prepareTea e getTea já estão definidas para você no editor de texto.
    Chame a função getTea para adquirir 40 xícaras de chá para o time e as armazene
    na variável tea4TeamFCC.

*/

// Função que retorna uma string representando uma xícara de chá verde
const prepareTea = () => 'greenTea';

/*
    Dada uma função (representando o tipo de chá) e o número de xícaras
    necessárias, a função a seguir retorna um array de strings (cada uma
    representa uma xícara de de um tipo específico de chá).
*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Altere apenas o código abaixo desta linha
const tea4TeamFCC = null;
// Altere apenas o código acima desta linha 