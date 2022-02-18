/*
    Entender de onde vem o protótipo de um objeto

    Assim como uma pessoa herda o gene de seus parentes, um objeto herda seu
    prototype diretamente da função construtora que o criou. Por exemplo, aqui
    o construtor de Bird cria um objeto duck:

    function Bird(name) {
    this.name = name;
    }

    let duck = new Bird("Donald");

    duck herda seu prototype da função construtora de Bird. Você pode mostrar a
    relação com o método isPrototypeOf:

    Bird.prototype.isPrototypeOf(duck);

    Isso retornaria true.

*/


// exemplo prático
function Bird(name) {
    this.name = name; // own protorype
}

// duck herda seu prototype da função construtora de Bird.
let duck = new Bird('Donald'); 

console.log(duck); // Bird { name: 'Donald' }
console.log('My name is ' + duck.name); // Donald

let prototypeDuck = Bird.prototype.isPrototypeOf(duck);
console.log(prototypeDuck); // true
