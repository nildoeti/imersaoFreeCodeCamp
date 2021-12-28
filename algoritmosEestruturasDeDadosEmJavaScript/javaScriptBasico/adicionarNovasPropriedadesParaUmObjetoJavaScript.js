/*
    Adicionar novas propriedades para um objeto JavaScript

    Você pode adicionar novas propriedades para um objeto JavaScript existente 
    da mesma forma pela qual você os modificaria.

    Aqui está como adicionaríamos uma propriedade bark para ourDog:

    ourDog.bark = "bow-wow";

    ou

    ourDog["bark"] = "bow-wow";

    Agora, quando acessamos ourDog.bark, nós teremos o seu latido, bow-wow.

    Exemplo:

    const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
    };

    ourDog.bark = "bow-wow";    

*/

// exemplo 1
const ourDog = {
    'name': 'Camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything!']
};

const result = ourDog;
console.log(result);
// adiciona propruiedade 'bark' com valor 'bow-wow'
ourDog.bark = 'bow-wow';
console.log(ourDog);

