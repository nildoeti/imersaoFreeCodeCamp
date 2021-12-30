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
    bottom: 'pants',
    bet: 'undefined'
};

const isTrue = myObj.hasOwnProperty('isTrue'); // true
const isBottom = myObj.hasOwnProperty('isBottom'); // false
const isBet = myObj.hasOwnProperty('bet');

console.log(isTrue, isBottom, isBet);

// exemplo com for/in
// font: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
var buz = {
    fog: 'stack'
};

for (var nome in buz) {
    if (buz.hasOwnProperty(nome)) {
        console.log("this is fog (" + nome + ") for sure. Value: " + buz[nome]);
    }
    else {
        console.log(nome); // toString ou qualquer outra coisa
    }
}


/*
    Desafio
    Modifique a função checkObj para verificar se um objeto passado para a
    função (obj) contém uma propriedade específica (checkProp). Se a propriedade
    for encontrada, retorne o valor da propriedade. Se não, retorne "Not Found".
*/

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty) {
        return obj[checkObj];
    } else {
        return 'Not Found.'
    }
    return 'Change Me!';
}

const result = checkObj();
console.log(result);
