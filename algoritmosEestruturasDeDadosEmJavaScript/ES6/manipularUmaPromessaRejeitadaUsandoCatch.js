/*
	Manipular uma promessa rejeitada usando o catch

	catch é o método usado quando a promessa é rejeitada. Ele é executado
	imediatamente após o método reject da promessa ser chamado. Aqui está a
	sintaxe:

	myPromise.catch(error => {

	});

	O parâmetro error é o argumento passado para o método reject.
*/

// use de catch para manipulao de erros
// myPromise.catch(error => {});


/*
	Adicione o método catch à sua promessa. Use error como parâmetro de sua
	função de callback e exiba o valor de error no console.
*/

const makeServerRequest = new Promise( (resolve, reject) => {
	let responseFromServer = true;

	if (responseFromServer) {
		resolve('We got the data');
	} else {
		reject('Data not received');
	}
});

makeServerRequest.then(result => {console.log();});
// makeServerRequest.catch(error => {console.log(error);});