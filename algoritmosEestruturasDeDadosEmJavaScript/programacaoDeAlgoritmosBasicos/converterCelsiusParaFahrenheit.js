/*
	Converter Celsius para Fahrenheit

	O algoritmo para converter de Celsius para Fahrenheit é a temperatura em
	Celsius vezes 9/5, mais 32.

	Você tem uma variável celsius representando uma temperatura em Celsius. Use
	a variável fahrenheit já definida e atribua a ela a temperatura equivalente
	à temperatura Celsius indicada. Use o algoritmo mencionado acima para ajudar
	a converter a temperatura em Celsius para Fahrenheit.

*/

function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);