/*
    Confirmar o final

    Verifique se uma string (primeiro argumento, str) termina com a sequência
    de caracteres de destino fornecida (segundo argumento, target).

    Este desafio pode ser resolvido com o método .endsWith(), que foi
    introduzido na ES2015. Para este desafio, entretanto, gostaríamos que
    você usasse um dos métodos de substring JavaScript.
*/

// solução 1
// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor
//
//   return str.slice(str.length - target.length) === target;
// }
//
// confirmEnding("He has to give me a new name", "name");


// solução 2
// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor
//
//   let re = new RegExp(target + "$", "i");
//
//   return re.test(str);
// }
//
// console.log(confirmEnding("Bastian", "n"));



// solução 3
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");
