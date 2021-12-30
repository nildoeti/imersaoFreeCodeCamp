/*
    Testar objetos por propriedades

    Às vezes, é útil verificar se a propriedade de um determinado objeto existe
    ou não. Podemos usar o método de objetos .hasOwnProperty(propname) para
    determinar se aquele objeto possui o nome de propriedade
    fornecido. .hasOwnProperty() retorna true ou false se a propriedade for
    encontrada ou não.

    Exemplo

    const myObj = {
    top: "hat",
    bottom: "pants"
    };

    myObj.hasOwnProperty("top");
    myObj.hasOwnProperty("middle");

    O primeiro hasOwnProperty retorna true, enquanto o segundo retorna false.

*/

const myObj = {
    top: 'hat',
    bottom: 'pants'
};

const isTrue = myObj.hasOwnProperty('top');
const isFalse = myObj.hasOwnProperty('middle');

console.log(isTrue, isFalse);
