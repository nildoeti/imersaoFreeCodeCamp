/*
    Mudar o protótipo para um novo objeto

    Até o momento, você tem adicionado propriedades para cada prototype
    individualmente:

    Bird.prototype.numLegs = 2;

    Isto se torna entediante após mais do que algumas propriedades.

    Bird.prototype.eat = function() {
    console.log("nom nom nom");
    }

    Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
    }

    Uma forma mais eficiente é definir o prototype para um novo objeto que já
    possui as propriedades. Dessa maneira, as propriedades são adicionadas
    todas de uma vez:

    Bird.prototype = {
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
    };


*/

// exemplo prático para mudar o protótipo para um novo objeto
function Bird(name) {
    this.name = name;
}

let b1 = new Bird('Donald');

Bird.prototype = {
    numLegs: 2,
    eat: function () {
        console.log('alguma coisa');
    },
    describe: function () {
        console.log('My name is ' + this.name);
    }
};

console.log(b1); // { name: 'Donald' }


/*
    Desafio
    Adiciona a propriedade numLegs e os dois métodos eat() e describe() para o
    prototype de Dog definindo o prototype para um novo objeto.
*/

function Dog (name) {
    this.name = name;
}

// let dogOne = new Dog('Pateta');

// Dog.prototype = {
//     numLegs: 4,
//     eat: function () {
//         console.log('Alguma coisa');
//     },
//     describe: function () {
//         console.log('My name is: ' + this.name);
//     }
// }

// console.log(dogOne); // { name: 'Pateta' }


// solução dois
Dog.prototype = {
    numLegs: 4,
    eat: () {
        console.log('alguma coisa');
    },
    describe: () {
        console.log('My name is ' + this.name);
    }
}
