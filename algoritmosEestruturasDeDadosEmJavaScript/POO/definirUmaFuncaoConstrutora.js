/*
    Definir uma função construtora

    Construtores são funções que criam novos objetos. Eles definem propriedades
    e comportamentos que pertencerão ao novo objeto. Pense neles como uma
    planta para a criação de novos objetos.

    Aqui está um exemplo de construtor:

    function Bird() {
      this.name = "Albert";
      this.color = "blue";
      this.numLegs = 2;
    }

    O construtor define um objeto Bird com propriedades name, color, e numLegs
    definidos como Albert, blue e 2, respectivamente. Construtores seguem
    algumas convenções:

        Construtores são definidos com a primeira letra do nome maiúscula para
        distinguir eles de outras funções que não são constructors.
        Construtores usam a palavra-chave this para definir as propriedades do
        objeto que eles criarão. Dentro do construtor, this referencia para um
        novo objeto quer vai ser criado.
        Construtores definem propriedades e comportamentos em vez de retornar
        valores como outras funções podem fazer.

*/

// Definir uma função construtora
function Bird() {
    this.name = 'Albert';
    this.color = 'blue';
    this.numLegs = 2;
}

// Definido nova função construtora
function Paises() {
    this.America = 'Brasil';
    this.Europa = 'Inglaterra';
    this.Asia = 'China';
    this.OrienteMedio = 'Egito';
    this.Africano = 'Africa';
}

/*
    Desafio
    Crie um construtor, Dog, com as propriedades name, color e numLegs que são
    definidos como string, string e número, respectivamente.
*/

function Dog() {
    this.name = 'Spot';
    this.color = 'black';
    this.numLegs = 4;
}
