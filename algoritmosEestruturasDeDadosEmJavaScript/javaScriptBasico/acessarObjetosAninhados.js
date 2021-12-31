/*
    Acessar objetos aninhados

    As subpropriedades de objetos podem ser acessadas ao encadear a notação de
    ponto e de colchetes.

    Aqui está um objeto aninhado:

    const ourStorage = {
      "desk": {
        "drawer": "stapler"
      },
      "cabinet": {
        "top drawer": {
          "folder1": "a file",
          "folder2": "secrets"
        },
        "bottom drawer": "soda"
      }
    };

    ourStorage.cabinet["top drawer"].folder2;
    ourStorage.desk.drawer;

    ourStorage.cabinet["top drawer"].folder2 seria a string secrets e
    ourStorage.desk.drawer seria a string stapler.
*/
// exemplo 1
const ourStorage = {
    'desk': {
        'drawer': 'stapler'
    },
    'cabinet': {
        'top drawer': {
            'folder1': ' a file',
            'folder2': 'secrets'
        },
        'bottom drawer': 'soda'
    }
};


const result1 = ourStorage.desk.drawer; // stapler
const result2 = ourStorage.desk; // { drawer: 'stapler' }
const result3 = ourStorage.cabinet['top drawer']; // { folder1: ' a file', folder2: 'secrets' }
const result4 = ourStorage.cabinet['top drawer'].folder1; //  a file
const result5 = ourStorage.cabinet['top drawer'].folder2; // secrets
const result6 = ourStorage.cabinet['bottom drawer']; // soda

console.log(result1, result2, result3, result4, result5, result6);

/*
    Desafio.
    Acesse o objeto myStorage e atribua o conteúdo da propriedade glove box para 
    a variável gloveBoxContents. Use notação de ponto para todas as propriedades 
    sempre que possível, caso contrário, use a notação de colchetes.
*/

const myStorage = {
    'car': {
        'inside': {
            'glove box': 'maps',
            'passenger seat': 'crubs' 
        },
        'outside': {
            'trunk': 'jack'
        }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents); // maps