/*
    Copiar itens de um array usando slice()

    O próximo método que abordaremos é slice(). Em vez de modificar um array,
    slice() copia ou extrai um determinado número de elementos para um novo
    array, deixando o array em que o método é chamado inalterado. slice()
    recebe apenas 2 parâmetros — o primeiro é o índice aonde começar a extração
    e o segundo é o índice no qual parar a extração (a extração ocorrerá até
    esse índice mas não o incluirá). Considere isto:

    let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

    let todaysWeather = weatherConditions.slice(1, 3);

    todaysWeather teria o valor ['snow', 'sleet'], enquanto weatherConditions
    ainda teria ['rain', 'snow', 'sleet', 'hail', 'clear'].

    Assim, criamos um novo array extraindo elementos de um array existente.
*/
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);

console.log(todaysWeather); // [ 'snow', 'sleet' ]
