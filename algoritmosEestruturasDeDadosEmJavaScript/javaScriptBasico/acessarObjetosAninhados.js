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

const result1 = ourStorage.cabinet['top drawer'].folder2;
const result2 = ourStorage.desk.drawer;

console.log(result1, result2); // secrets, stapler
