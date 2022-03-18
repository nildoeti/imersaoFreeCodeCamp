/*
    Usar closure para evitar que propriedades de um objeto sejam modificadas
    externamente

    No desafio anterior, bird possuía uma propriedade pública name. É
    considerado publico porque ele pode ser acessado e modificado fora da
    definição de bird.

    bird.name = "Duffy";

    Portanto, qualquer parte do seu código pode facilmente alterar o nome do
    bird para qualquer valor. Pense sobre coisas como senhas e contas de banco
    sendo facilmente modificáveis em qualquer parte do seu código. Isso poderia
    causar inúmeros problemas.

    A forma mais simples para tornar essa propriedade pública em privada, seria
    criando uma variável dentro da função constructor. Isso alteraria o escopo
    daquela variável para ser apenas o escopo da função construtora ao invés de
    globalmente disponível. Dessa maneira, a variável pode ser acessada e
    modificada apenas pelos métodos dentro da função construtora.

    function Bird() {
    let hatchedEgg = 10;

    this.getHatchedEggCount = function() { 
        return hatchedEgg;
    };
    }
    let ducky = new Bird();
    ducky.getHatchedEggCount();

    Aqui getHatchedEggCount é um método privilegiado, porque ele possui acesso
    à variável privada hatchedEgg. Isso é possível porque hatchedEgg é declarado
    no mesmo contexto que getHatchedEggCount. Em JavaScript, a função sempre
    possui acesso ao contexto na qual foi criada. Isso é chamado de closure.

*/

// function Bird() {
//     let hatchedEgg = 10;
// }

// this.getHatchedEggCount = function () {
//     return hatchedEgg;
// };

// let duck = new Bird();
// duck.getHatchedEggCount();


/*

    Desafio
    Modifique como weight é declarado na função Bird para que seja uma variável
    privada. Em seguida, crie o método getWeight que retorna o valor de weight 
    15.

*/

// exemplo 1
function Bird() {
    this.weight = 15;

    this.getWeight = function() {
        return weight;
    }
}