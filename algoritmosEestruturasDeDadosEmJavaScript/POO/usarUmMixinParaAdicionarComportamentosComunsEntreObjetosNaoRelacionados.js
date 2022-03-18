
/*
    Usar um mixin para adicionar comportamentos comuns entre objetos não
    relacionados

    Como você já viu, comportamento é compartilhado através de herança. Porém,
    existem casos em que a herança não é a melhor solução. Herança não funciona
    muito bem para objetos não-relacionados como Bird e Airplane. Ambos podem
    voar, mas um Bird não é um tipo de Airplane e vice-versa.

    Para objetos não relacionados, é melhor usar mixins. Um mixin permite outros
    objetos para utilizar uma coleção de funções.

    let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, wooosh!");
    }
    };

    O flyMixin recebe qualquer objeto e da a ele o método fly.

    let bird = {
    name: "Donald",
    numLegs: 2
    };

    let plane = {
    model: "777",
    numPassengers: 524
    };

    flyMixin(bird);
    flyMixin(plane);

    Aqui bird e plane são passados para flyMixin, o que em seguida atribui a
    função fly para cada objeto. Agora bird e plane podem ambos voar:

    bird.fly();
    plane.fly();

    O console irá mostrar a string Flying, woosh! duas vezes, uma para cada
    chamada a .fly().

    Note como o mixin permite que o mesmo método fly seja reutilizado por
    objetos não-relacionados bird e plane.

*/

// let flyMixin = function(obj) {
//     obj.fly = function() {
//         console.log('Flying, woosh!');
//     };
// };

// O flyMixin recebe qualquer objeto e da a ele o método fly.

// let bird = {
//     name: 'Donald',
//     numLegs: 2
// };


// let plane = {
//     model: '777',
//     numPassengers: 524
// };

// flyMixin(bird);
// flyMixin(plane);


// bird.fly(); // Flying, woosh!
// plane.fly(); // Flying, woosh!


/*
    Desafios
    Crie um mixin chamado glideMixin que define o método chamado glide. Em 
    seguida, use glideMixin para dar ambos bird e boat a habilidade de deslizar
    (glide).
*/


let bird = {
    name: 'Donald',
    numLegs: 2
};

let boat = {
    name: 'Warrior',
    type: 'race-boat'
};

// Add your code below this line
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log('Gliding');
    };
};

glideMixin(bird);
glideMixin(boat);

bird.glide(); // Gliding
boat.glide(); // Gliding
