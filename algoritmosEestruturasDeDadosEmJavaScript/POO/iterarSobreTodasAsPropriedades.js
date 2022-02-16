/*
    Iterar sobre todas as propriedades

    Até agora você já viu dois tipos de propriedades: as propriedades own
    properties e prototype. Propriedades próprias (ou Own properties) são
    definidas diretamente na própria instância do objeto. E as propriedades do
    protótipo são definidas em prototype.

    function Bird(name) {
    this.name = name;  //own property
    }

    Bird.prototype.numLegs = 2; // prototype property

    let duck = new Bird("Donald");

    Aqui está como você adiciona own properties duck para o array ownProps e
    propriedades prototype para o array prototypeProps:

    let ownProps = [];
    let prototypeProps = [];

    for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
    }

    console.log(ownProps);
    console.log(prototypeProps);

    console.log(ownProps) deve exibir no console ["name"], e
    console.log(prototypeProps) exibirá no console ["numLegs"].

*/
// exemplos para own property e prototype property
function Bird (name) {
    this.name = name; // own propert
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird('Donald');
console.log(duck);


//  adiciona own properties duck para o array ownProps e propriedades prototype
// para o array prototypeProps
let ownProperty = [];
let prototypeProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProperty.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProperty);
console.log(prototypeProps);
