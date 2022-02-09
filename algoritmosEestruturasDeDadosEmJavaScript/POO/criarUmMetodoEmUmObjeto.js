/*
    Criar um método em um objeto

    Objetos podem ter um tipo especial de propriedade, chamado de método.

    Métodos e propriedades são funções. Isso adiciona diferentes comportamentos
    para um objeto. Aqui está o exemplo duck com um método:

    let duck = {
      name: "Aflac",
      numLegs: 2,
      sayName: function() {return "The name of this duck is " + duck.name + ".";}
    };
    duck.sayName();

    O exemplo adiciona o método sayName, que é uma função responsável por
    retornar uma frase contendo o nome do duck. Note que o método acessou a
    propriedade name na declaração de retorno usando duck.name. O próximo
    desafio vai mostrar outra forma de fazer isso.
*/

// exemplo de como criar um método em javascript
let duck = {
    name: 'Aflac',
    numLegs:  2,
    sayName: function() {
        return 'The name is of this duck is ' + duck.name + '.';
    }
}

let duckSayName = duck.sayName();
console.log(duckSayName); // The name is of this duck is Aflac.


// exemplo 2, de como criar um método em javascript
let pessoa = {
    nome: 'Fulano',
    sobreNome: 'de Tal',
    nomeCompleto: function(){
        return pessoa.nome + ' ' + pessoa.sobreNome;
    }
}

let pessoaNomeCompleto = pessoa.nomeCompleto();
console.log(pessoaNomeCompleto); // Fulano de Tal
