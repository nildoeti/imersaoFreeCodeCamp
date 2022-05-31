/*
    Usar uma IIFE para criar um módulo

    Uma expressão de função imediatamente invocada (IIFE) é frequentemente
    utilizada para agrupar funcionalidades relacionadas para um único objeto ou
    módulo. Por exemplo, um desafio anterior definiu dois mixins:

    function glideMixin(obj) {
    obj.glide = function() {
        console.log("Gliding on the water");
    };
    }
    function flyMixin(obj) {
    obj.fly = function() {
        console.log("Flying, wooosh!");
    };
    }

    Podemos agrupar esses mixins em um módulo como o seguinte:

    let motionModule = (function () {
    return {
        glideMixin: function(obj) {
        obj.glide = function() {
            console.log("Gliding on the water");
        };
        },
        flyMixin: function(obj) {
        obj.fly = function() {
            console.log("Flying, wooosh!");
        };
        }
    }
    })();

    Note que você possui uma expressão de função imediatamente invocada (IIFE)
    que retorna um objeto motionModule. Esse objeto retornado contém todos os
    comportamentos de mixin como propriedades do objeto. A vantagem do padrão
    módulo é que todos os comportamentos de movimento podem ser embalados em um
    único objeto que pode em seguida ser usado por outras partes do seu código.
    Aqui está um exemplo utilizando isso:

    motionModule.glideMixin(duck);
    duck.glide();


*/


// exemplo de objetos
// function glideMixin(obj) {
//     obj.glide = function() { // método do obj
//         console.log('Gliding on the water');
//     };
// }

// function flyMixin(obj) {
//     obj.fly = function() { // método do obj
//         console.log('Flying, woosg!');
//     };
// }

// agrupamento dos dois objetos acima
let motionModule = (function() {
    function glideMixin(obj) { // método
        obj.glide = function() {
            console.log('Gliding on the water');
        };
    }

    function flyMixin(obj) {
        obj.fly = function() { // método
            console.log('Flying, woosg!');
        };
    }
})();

// exemplo de uso ṕara IIFE
// motionModule.glideMixin(duck);
// duck.glide();

/*
    Desafio
    Crie um módulo chamado funModule para embrulhar os dois mixins isCuteMixin
    e singMixin. funModule deve retornar um objeto.
*/

let isCuteMixin = function(obj) {
    obj.isCute = function() {
        return true;
    };
};

let singMixin = function(obj) {
    obj.sing = function() {
        console.log('Singing to an awesome tune');
    };
};


// solução 1
// let funModule = (function() {
//     return {
//         isCuteMixin: function(obj) {
//             obj.isCute = function() {
//                 return true;
//             };
//         },
//         singMixin: function(obj) {
//             obj.sing = function(obj) {
//                 console.log('Singing to an awesome tune');
//             };
//         }
        
//     };
// })();


// solução 1
