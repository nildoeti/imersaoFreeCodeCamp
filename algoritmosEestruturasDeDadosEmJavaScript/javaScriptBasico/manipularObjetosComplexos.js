/*
    Manipular objetos complexos

    Às vezes, você pode querer armazenar dados em uma Estrutura de Dados
    flexível. Um objeto JavaScript é uma forma de lidar com dados flexíveis.
    Eles permitem combinações arbitrárias de strings, numbers, booleans, arrays,
    functions e objects.

    Aqui está um exemplo de estrutura de dados complexas:

    const ourMusic = [
      {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
          "CD",
          "Cassette",
          "LP"
        ],
        "gold": true
      }
    ];

    Este é um array que contém um objeto dentro dele. O objeto possui vários
    pedaços de metadados sobre um álbum. Também possui um array aninhado
    formats. Se você quiser adicionar mais álbuns, você pode fazer isso
    adicionando os discos ao array de alto nível. Objetos armazenam dados em
    uma propriedade, a qual possui um formato de chave-valor. No exemplo acima,
    "artist": "Daft Punk" é uma propriedade que tem uma chave artist e um valor
    de Daft Punk. JavaScript Object Notation ou JSON é um formato de intercâmbio
    de dados relacionados usado para armazenar dados.

    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [
        "CD",
        "Cassette",
        "LP"
      ],
      "gold": true
    }

    Observação: você precisará colocar uma vírgula após cada objeto no array, a
    não ser que ele seja o último objeto no array.
*/

// exemplo 1
const ourMusic = [
    {
        'artist': 'Daft Punk',
        'title': 'Homework',
        'release_year': 1997,
        'formats': [
        'CD',
        'Cassette',
        'LP'
    ],
    }
];
