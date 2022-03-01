/*
    Definir o protótipo da classe filha para que seja uma instância do pai

    No desafio anterior, você viu o primeiro passo para herdar comportamento do
    supertipo (ou parente) Animal: fazendo uma instância de Animal.

    Este desafio cobre o próximo passo: definir o prototype do subtipo
    (ou filho) - neste caso, Bird - para ser uma instância de Animal.

    Bird.prototype = Object.create(Animal.prototype);

    Lembre-se de que o prototype é como uma receita para criar um objeto. De
    certa forma, a receita para Bird agora inclui todos os "ingredientes" chave
    para Animal.

    let duck = new Bird("Donald");
    duck.eat();

    duck herda todas as propriedades de Animal, incluindo o método eat.
*/


// Modifique o código para que as instâncias de Dog herdem de Animal.
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log('alguma coisa');
    }
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

beagle.eat(); // alguma coisa
