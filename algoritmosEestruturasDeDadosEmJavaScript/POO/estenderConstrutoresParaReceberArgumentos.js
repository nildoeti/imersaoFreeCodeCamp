/*
    Estender construtores para receber argumentos

    Os construtores Bird e Dog do último desafio funcionaram bem. No entanto,
    note que todos os Birds que são criados com o construtor Bird são
    automaticamente nomeados Albeart, são da cor azul e possuem duas pernas. E
    se você deseja pássaros com diferentes valores para seus nomes e cores? É
    possível alterar estas propriedades de cada pássaro manualmente, mas isso
    daria bastante trabalho:

    let swan = new Bird();
    swan.name = "Carlos";
    swan.color = "white";

    Suponha que você está escrevendo um programa para registrar centenas ou até
    milhares de diferentes pássaros em um aviário. Seria necessário muito tempo
    para criar todos estes pássaros, e então alterar as propriedades para os
    diferentes valores de cada um. Para criar diferentes objetos Bird de forma
    mais fácil, você pode projetar o construtor de Bird para aceitar parâmetros:

    function Bird(name, color) {
      this.name = name;
      this.color = color;
      this.numLegs = 2;
    }

    Em seguida, passe os valores como argumentos para definir cada pássaro único
    no construtor Bird: let cardinal = new Bird("Bruce","red"); Isso dará uma
    nova instância de Bird com as propriedades name e color definidas como Bruce
    e red, respectivamente. A propriedade numLegs ainda está definida como 2. O
    cardinal possui três propriedades:

    cardinal.name
    cardinal.color
    cardinal.numLegs

    O construtor é mais flexível. Agora é possível definir as propriedades de
    cada Bird ao mesmo tempo em que são criados, o que é uma grande utilidade
    dos construtores JavaScript. Eles agrupam junto objetos baseados em
    características e comportamentos compartilhados e definem uma planta que
    automatiza a criação deles.

*/

// função construtora do desafio anterior
// function Bird() {
//     this.name = 'Albeart';
//     this.color = 'blue';
//     this.numLegs = 2;
// }
// acessando/modificando nossa função construtora Bird
// let blueBird = new Bird();
// console.log('Antes: ', blueBird); // Antes:  Bird { name: 'Albeart', color: 'blue', numLegs: 2 }

// Modificando as propriedades da função construtora
// blueBird.name = 'Poll';
// blueBird.color = 'black';
// blueBird.numLegs = '4';
// console.log(blueBird); // Bird { name: 'Poll', color: 'black', numLegs: '4' }

// projetar o construtor de Bird para aceitar parâmetros
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
// passando os valores como argumentos para a definição de cada pássaro
let cardinal1 = new Bird('Bruce', 'red');
let cardinal2 = new Bird('Poll', 'black');
let cardinal3 = new Bird('Tesla', 'green');

console.log(cardinal1); // Bird { name: 'Bruce', color: 'red', numLegs: 2 }
console.log(cardinal2); // Bird { name: 'Poll', color: 'black', numLegs: 2 }
console.log(cardinal3); // Bird { name: 'Tesla', color: 'green', numLegs: 2 }


/*
    Desafio
    Crie outro construtor Dog. Desta vez, defina o construtor para receber os
    parâmetros name e color, e que tenham a propriedade numLegs fixada em 4. Em
    seguida, crie um novo Dog salvo na variável terrier. Passe duas strings
    como argumentos para as propriedades name e color.
*/
function Dog(nome, color) {
    this.name = nome;
    this.color = color;
    this.numLegs = 4;
};

let terrier = new Dog('Poll', 'black');
console.log(terrier); // Dog { name: 'Poll', color: 'black', numLegs: 4 }

