/**
 *
 * Usar objetos para pesquisas

    Objetos podem ser pensados como armazenamento de chave/valor, como um
    dicionário. Se você tem um dado tabular, você pode usar um objeto para
    pesquisar valores ao invés de uma instrução switch ou uma cadeia de if/else.
    Isso é mais útil quando você sabe que o seu dado de entrada é limitado
    para um certo intervalo.

    Aqui está um exemplo de uma simples pesquisa reversa no alfabeto:

    const alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    ...
    24:"C",
    25:"B",
    26:"A"
    };

    alpha[2];
    alpha[24];

    const value = 2;
    alpha[value];

    alpha[2] é a string Y, alpha[24] é a string C e alpha[value] é a string Y.

 */

    // pesquisa reversa no alfabeto:
    const alpha = {
        1: 'Z',
        2: 'Y',
        3: 'X',
        4: 'W',
        24: 'C',
        25: 'B',
        26: 'A'
    };

    console.log(alpha[2]); // Y
    console.log(alpha[24]); // C

    const value = 2;
    alpha[value];
    console.log(alpha[value]); // Y

    const value2 = 26;
    alpha[value2];
    console.log(alpha[value2]); // A


    /**
     * Desafio
     *
     * Converta a instrução switch em um objeto chamado lookup. Use-o para
     * pesquisar por val e atribua a string associada para a variável result.
     */

    // function phoneticLookup(val) {
    //     let result = '';

    //     switch (val) {
    //         case 'alpha':
    //             result = 'Adams';
    //             break;
    //         case 'bravo':
    //             result = 'Boston';
    //             break;
    //         case 'charlie':
    //             result = 'Chicago';
    //             break;
    //         case 'delta':
    //             result = 'Denver';
    //             break;
    //         case 'echo':
    //             result = 'Easy';
    //             break;
    //         case 'foxtrot':
    //             result = 'Frank';
    //     }
    //     return result;
    // }

    // const result = phoneticLookup('charlie');
    // console.log(result);

    // convertendo desafio phoneticLookup

    function phoneticLookup(val) {
        let result = '';

        var lookup = 
            'alpha': 'Adams',
            'bravo': 'Boston',
            'charlie': 'Chicago',
            'delta': 'Denver',
            'echo': 'Easy',
            'foxtrot': 'Frank'
        };
        result = lookup(val);
        return result;
    }
