/*
	Verificar se um objeto tem uma propriedade

	Agora podemos adicionar, modificar e remover as chaves dos objetos. Mas e
	se apenas quiséssemos saber se um objeto tem uma propriedade específica? O
	JavaScript nos fornece duas maneiras diferentes de fazer isso. Um usa o
	método hasOwnProperty() e o outro usa a palavra-chave in. Se tivermos um
	objeto users com uma propriedade de Alan, podemos verificar a sua presença
	de qualquer uma das seguintes maneiras:

	users.hasOwnProperty('Alan');
	'Alan' in users;

	Ambos retornariam true.

	Termine de escrever a função para que ela retorne true se o objeto passado
	a ela contiver todos os quatro nomes, Alan, Jeff, Sarah e Ryan e retorne
	false do contrário.
*/

let user = {
	Alan: {
		age: 27,
		online: true
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: true
	}
};

// solução 1
function isEvervoneHere(userObj) {
	// saber se um objeto tem uma propriedade específi...
	if (
		user.hasOwnProperty('Alan') &&
		user.hasOwnProperty('Jeff') &&
		user.hasOwnProperty('Sarah')
		) {
		return true;
	}
	return false;
}

console.log(isEvervoneHere(user)); // true
