/*
    Herdar comportamentos de um supertipo

    No desafio anterior, você criou um supertype chamado Animal que define os
    comportamentos compartilhados por todos os animais:

    function Animal() { }
    Animal.prototype.eat = function() {
    console.log("nom nom nom");
    };

    Este e o próximo desafio vai abordar como reutilizar métodos de Animal
    dentro de Bird e Dog sem ter de definir os métodos novamente. Ele utiliza
    uma técnica chamada herança. Este desafio cobrirá o primeiro passo: fazer
    uma instância do supertype (ou parente). Você já sabe uma forma de criar
    instâncias de Animal utilizando o operador new:

    let animal = new Animal();

    Há algumas desvantagens quando utilizamos essa sintaxe para herança, que
    são muito complexas para o escopo deste desafio. Em vez disso, aqui está
    uma abordagem alternativa sem essas desvantagens:

    let animal = Object.create(Animal.prototype);

    Object.create(obj) cria um novo objeto, e define obj como o novo prototype
    do objeto. Lembre-se que o prototype é como uma "receita" para criar um
    objeto. Ao definir o prototype de animal para ser um prototype de Animal,
    você está efetivamente dando a instância animal a mesma "receita" de
    qualquer outra instância de Animal.

    animal.eat();
    animal instanceof Animal;

    O método instanceof aqui vai retornar true.
*/

// super type Animal
// function Animal () {
//     Animal.prototype.eat = function () {
//         console.log('Alguma coisa');
//     }
// }

// novainstância para Animal no modelo abaixo torna complea sua manutenção
// let animal = new Animal();

// abordagem alternativa para a criação de uma nova instância do objeto
// let animal = Object.create(Animal.prototype);

// animal.eat;
// let newStance = animal instanceof Animal;
// console.log(newStance);


/**
 *Desafio
 * Utilize Object.create para fazer duas instâncias de Animal nomeados duck e
 * beagle.
 */

function Animal() {}
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log('alguma coisa');
    }
};

// Altere apenas o código abaixo desta linha
// let duck;
// let beagle;
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
