/*
    Escapar aspas literais em strings

    Quando você estiver definindo uma sequência de caracteres você deve iniciar
    e terminar com uma aspa simples ou dupla. O que acontece quando você
    precisa de uma aspa literal: " ou ' dentro de sua string?

    Em JavaScript, você pode escapar uma aspa para que não seja considerada como
    o fim de uma string ao colocar a barra invertida (\) na frente da aspa.

    const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

    Isso sinaliza ao JavaScript que a aspa seguinte não é o fim de uma string,
    mas que deve aparecer dentro da string. Então, se você fosse imprimir isso
    no console, você obteria:

    Alan said, "Peter is learning JavaScript".

*/

let myString = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myString);
