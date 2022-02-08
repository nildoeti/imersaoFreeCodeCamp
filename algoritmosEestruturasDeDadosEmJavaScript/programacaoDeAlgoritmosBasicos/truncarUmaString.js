/*
    Truncar uma string

    Trunque uma string (primeiro argumento) se ela for maior que o comprimento
    máximo da string (segundo argumento). Retorne a string truncada
    com ... (reticências) ao final.
*/

// solução 1
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
