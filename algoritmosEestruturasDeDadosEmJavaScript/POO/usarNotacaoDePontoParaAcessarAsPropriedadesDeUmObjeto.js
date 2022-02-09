/*
    Usar notação de ponto para acessar as propriedades de um objeto

    O último desafio criou um objeto com várias propriedades. Agora você verá
    como acessar os valores dessas propriedades. Exemplo:

    let duck = {
      name: "Aflac",
      numLegs: 2
    };
    console.log(duck.name);

    A notação de ponto é utilizada no nome do objeto, duck, seguida pelo nome
    da propriedade, name, para acessar o valor de Aflac.
*/
// exemplo de como acessar uma propriedade de um objeto
let duck = {
    name: 'Aflac',
    numLegs: 2
};

let nameDuc = duck.name;
let legsDuck = duck.numLegs;

console.log(nameDuc); // Aflac
console.log(legsDuck);
