/**
    Utilizar herança para não se repetir

    Tem um princípio da programação chamado Don't Repeat Yourself (DRY) - Não
    se Repita. O motivo pelo qual código repetido é um problema se deve ao fato
    de qualquer alteração exige correção de código em vários locais. Geralmente
    isso significa mais trabalho para os programadores e mais espaço para erros.

    Note que, no exemplo abaixo, o método describe é compartilhado por Bird
    e Dog:

    Bird.prototype = {
    constructor: Bird,
    describe: function() {
        console.log("My name is " + this.name);
    }
    };

    Dog.prototype = {
    constructor: Dog,
    describe: function() {
        console.log("My name is " + this.name);
    }
    };

    O método describe é repetido em dois locais. O código pode ser editado para
    seguir o princípio DRY (Não se Repita) ao criar um supertype (ou parente)
    chamado Animal:

    function Animal() { };

    Animal.prototype = {
    constructor: Animal, 
    describe: function() {
        console.log("My name is " + this.name);
    }
    };

    Desde que Animal inclui o método describe, você pode remover ele de Bird
    e Dog:

    Bird.prototype = {
    constructor: Bird
    };

    Dog.prototype = {
    constructor: Dog
    };
 */

    // método describe repetido em dois lugares
    // Bird.prototype = {
    //     constructor: Bird,

    //     // método compartilhado
    //     describe: function() {
    //         console.log('My name is ' + this.name);
    //     }
    // };

    // Dog.prototype = {
    //     constructor: Dog,
    //     // método compartilhado
    //     describe: function() {
    //         console.log('My name is ' + this.name);
    //     } 
    // };


// function Animal() {}

// Animal.prototype = {
//     constructor: Animal,
//     // método describe
//     describe: function() {
//         console.log('My name is ' + this.name);
//     }
// };

// Bird.prototype = {
//     constructor: Bird;
// }

// Dog.prototype = {
//     constructor: Dog;
// }


/*
    Desafio
    O método eat é repetido em Cat e Bear. Edite o código no espírito do
    princípio DRY ao mover o método eat do supertype de Animal.
*/ 

// function Cat(name) { // função construtora
//     this.name = name;
// }

// Cat.prototype = {
//     constructor: Cat,
//     // método eat compartilhado
//     eat: function() {
//         console.log('bla bla bla');
//     }
// };

// function Bear(name) {
//     constructor: Bear,
//     // método eat compartilhado
//     eat: function() {
//         console.log('bla bla bla');
//     }
// };

// function Animal() {} // função construtora animal
// Animal.prototype = {
//     constructor: Animal,
// }


// resposta ao desafio
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat
};


function Bear(name) {
    this.name;
}
Bear.prototype = {
    constructor: Bear
};


function Animal() {}
Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log('bla bla bla');
    }
}