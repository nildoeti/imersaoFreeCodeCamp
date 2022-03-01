/*
    Redefinir uma propriedade herdada do construtor

    Quando um objeto herda seu protótipo de outro objeto, ele também herda a propriedade construtora do supertipo.

    Exemplo:

    function Bird() { }
    Bird.prototype = Object.create(Animal.prototype);
    let duck = new Bird();
    duck.constructor

    Mas duck e todas as instâncias de Bird devem mostrar que eles foram construídos por Bird e não Animal. Para fazer isso, você pode manualmente definir a propriedade construtora de Bird para o objeto Bird:

    Bird.prototype.constructor = Bird;
    duck.constructor

*/

// exemplo protótipo herdado de outro objeto
// function Bird() {}
// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird();
// duck.constructor;

// // mostrar que eles foram construídos por Bird
// Bird.prototype.constructor = Bird;
// duck.constructor;


/*
    Desafio
    Corrija o código para que duck.constructor e beagle.constructor retornem
    seus respectivos construtores.
*/

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Altere apenas o código abaixo desta linha
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
