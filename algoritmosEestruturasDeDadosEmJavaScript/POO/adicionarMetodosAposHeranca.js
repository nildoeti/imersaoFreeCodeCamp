/*
    Adicionar métodos após a herança

    Uma função construtora, ou simplesmente construtor, que herda seu objeto de
    prototype de uma função construtora de supertipo, além dos métodos herdados,
    ainda poderá ter seus próprios métodos.

    Por exemplo, Bird é um construtor que herda seu prototype de Animal:

    function Animal() { }
    Animal.prototype.eat = function() {
    console.log("nom nom nom");
    };
    function Bird() { }
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;

    Como adicional do que é herdado da classe Animal, você deseja adicionar o
    comportamento que é único de objetos Bird. Aqui, Bird definirá a função
    fly(). As funções são adicionadas ao Bird's prototype (protótipo do
        pássaro) da mesma forma que qualquer função construtora:

    Bird.prototype.fly = function() {
    console.log("I'm flying!");
    };

    Agora as instâncias de Bird terão ambos os métodos, eat() e fly():

    let duck = new Bird();
    duck.eat();
    duck.fly();

    duck.eat() exibe no console a string nom nom nom, e duck.fly() mostra a
    Sstring I'm flying!.

*/

function Animal () {} // função construtora
Animal.prototype.eat = function () { // função construtora de supertipo
    console.log('non non non');
};

// Bird é um construtor que herda seu prototype de Animal
function Bird () {} // função construtora
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird();

// adicionar o comportamento que é único de objetos Bird.
Bird.prototype.fly = function () {
    console.log('I am flying');
};

//  instâncias de Bird terão ambos os métodos
let duck = new Bird();
duck.eat();
duck.fly();


/*
    Desafio
    Adiciona todos os códigos necessários para que o objeto Dog herde de Animal
    e o prototype de construtor de Dog está definido para Dog. Então adiciona o
    método bark() para o objeto Dog para que um beagle possa eat() e bark(). O
    método bark() deveria imprimir no console a string: Woof!.
*/

function Dog () {}
Dog.prototype = Object.create(Animation.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log('Woof!');
}

let beagle = new Dog();

beagle.eat = Dog();
beagle.fly = Dog();
