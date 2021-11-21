/*
    Modificar dados de array com índices

    Ao contrário das strings, as entradas de arrays são mutáveis e podem ser 
    alteradas livremente, mesmo se o array foi declarado com const.

    Exemplo

    const ourArray = [50, 40, 30];
    ourArray[0] = 15;

    ourArray agora tem o valor [15, 40, 30].

    Observação: não deve haver espaços entre o nome do array e os colchetes, 
    como array [0]. Embora JavaScript seja capaz de processar isso corretamente, 
    isso pode confundir outros programadores lendo seu código.
*/

const myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);