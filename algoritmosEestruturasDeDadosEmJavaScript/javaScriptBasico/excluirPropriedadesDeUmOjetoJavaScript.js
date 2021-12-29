/**
 * Excluir propriedades de um objeto JavaScript

    Podemos também excluir propriedades de objetos dessa forma:

    delete ourDog.bark;

    Exemplo:

    const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
    };

    delete ourDog.bark;

    Após a última linha mostrada acima, ourDog se parece com:

    {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
    }

 */

// exemplo 1
const ourDog = {
    'name': 'Camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything']
};

// listando o objeto ourDog
console.log(ourDog); 

// adicionando nova propriedade ao objeto ourDog
ourDog.bark = 'woof';
console.log(ourDog);

// removendo propriedade bark do objeto ourDog
delete ourDog.bark;
console.log(ourDog);

