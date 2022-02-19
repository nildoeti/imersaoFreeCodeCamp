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

    // exemplo prático para DRY, código repetido
    function Bird(name) {
        this.name = name;
    }

    function Dog(name) {
        this.name = name;
    }

    Bird.prototype = {
        constructor: Bird,
        describe: function() {
            console.log('My name is ' + this.name);
        }
    };

    Dog.prototype = {
        constructor: Dog,
        describe: function() {
            console.log('This name is ' + this.name);
        }
    }
    

