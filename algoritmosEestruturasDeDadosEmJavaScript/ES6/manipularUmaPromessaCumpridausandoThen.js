/*
	Manipular uma promessa cumprida usando o then

	Promessas são úteis quando você tem um processo que leva uma quantidade de
	tempo desconhecido para ser finalizado (ou seja, algo assíncrono). Muitas
	vezes, uma requisição a um servidor. Fazer uma requisição a um servidor
	leva tempo, e após a requisição ser finalizada, você geralmente quer fazer
	algo com a resposta retornada. Isso pode ser feito usando o método then. O
	método then é executado imediatamente após a promessa ser cumprida com
	resolve. Exemplo:

	myPromise.then(result => {

	});

	O parâmetro result vem do argumento dado ao método resolve.
*/

// exemplo 1 para then/result
// myPromise.them(result => {

// });


/*
	Desafio

	Adicione o método then à sua promessa. Use result como parâmetro de sua
	função de callback e exiba result no console.
*/

const makeServerRequest = new Promise( (resolve, reject) => {

	let responseFromServer = true;

	if (responseFromServer) {
		resolve('We got the data');
	} else {
		reject('Data not reiceved');
	}
});
makeServerRequest.then( result => {console.log(result);});