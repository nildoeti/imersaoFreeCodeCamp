/*
    Usar um construtor para criar objetos

    Aqui está o construtor de Bird do desafio anterior:

    function Bird() {
      this.name = "Albert";
      this.color  = "blue";
      this.numLegs = 2;
    }

    let blueBird = new Bird();

    Observação: this dentro do construtor sempre refere-se ao objeto sendo
    criado.

    Note que o operador new é usado quando chamamos o construtor. Isso avisa ao
    JavaScript para criar uma nova instância de Bird chamado blueBird. Sem o
    operador new, this dentro do construtor não iria apontar para o objeto
    recentemente criado, dando resultados inesperados. Agora blueBird possui
    todas as propriedades definidas dentro do construtor Bird:

    blueBird.name;
    blueBird.color;
    blueBird.numLegs;

    Assim como qualquer outro objeto, suas propriedades podem ser acessadas e
    modificadas:

    blueBird.name = 'Elvira';
    blueBird.name;
*/

// construtor de Bird do desafio anterior
function Bird() {
    // this dentro do construtor representa o objeto sendo criado
    this.name = 'Albert';
    this.color = 'blue';
    this.numLegs = 2;
}
let blueBird = new Bird(); // o operador new é usado para chamar o construtor e
                            // cria uma nova instância de Bird chamado blueBird
console.log(blueBird); // Bird { name: 'Albert', color: 'blue', numLegs: 2 }

// acessando e modificando as propriedades de um objeto
blueBird.name = 'Elvira';
blueBird.color = 'black';
blueBird.numLegs = 4;
console.log(blueBird); // Bird { name: 'Elvira', color: 'black', numLegs: 4 }


/*
    Desafio
    Utilize o construtor de Dog da última lição para criar uma nova instância
    de Dog, atribuindo a instância para a variável hound.
*/

function Dog() {
    this.name = 'Rupert';
    this.color = 'brown';
    this.numLegs = 4;
}
let hound = new Dog(); // nova instância criada para Dog()
