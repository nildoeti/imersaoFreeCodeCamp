/*
    Entender a cadeia de protótipos

    Todos os objetos em JavaScript (com algumas exceções) possuem um prototype.
    Além de que, um prototype de um objeto ser um próprio objeto.

    function Bird(name) {
    this.name = name;
    }

    typeof Bird.prototype;

    Devido ao fato de um prototype ser um objeto, um prototype pode ter seu
    próprio prototype! Neste caso, o prototype de Bird.prototype é um
    Object.prototype:

    Object.prototype.isPrototypeOf(Bird.prototype);

    Como isso é útil? Você pode ser lembrar que o método hasOwnProperty do
    desafio anterior:

    let duck = new Bird("Donald");
    duck.hasOwnProperty("name");

    O método hasOwnProperty é definido em Object.prototype, o qual pode ser
    acessado por Bird.prototype, o qual pode ser acessado por duck. Este é um
    exemplo de cadeia de prototype. Nesta cadeia de prototype, Bird é um
    supertipo para duck, enquanto duck é o subtipo. Object é um supertipo para
    ambos Bird e duck. Object é um supertipo para todos os objetos em
    JavaScript. Desta forma, qualquer objeto pode utilizar o método
    hasOwnProperty.

*/

// exemplo prático para cadeia de protótipo
function Bird(name) {
    this.name = name; // own prototype
}

console.log(typeof(Bird)); // function
console.log(typeof(Bird.prototype)); // object
console.log(Object.prototype.isPrototypeOf(Bird.prototype)); // true