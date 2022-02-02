/*
	Iterar através das chaves de um objeto com a declaração for...in

	Às vezes, você pode precisar iterar através de todas as chaves dentro de
	um objeto. Isso requer uma sintaxe específica no JavaScript chamada de
	declaração for...in. Para nosso objeto users, isso pode se parecer como:

	for (let user in users) {
	  console.log(user);
	}

	Isso vai exibir no console Alan, Jeff, Sarah e Ryan - cada valor em sua
	própria linha.

	Nessa declaração, definimos uma variável user e, como você pode ver, essa
	variável é redefinida durante cada iteração para cada chave do objeto
	conforme o comando se repete através do objeto, resultando em cada nome de
	usuário sendo exibido no console.

	Observação: objetos não mantém uma ordem para as chaves armazenadas como
	arrays fazem. Portanto, a posição de uma chave em um objeto, ou a ordem
	relativa na qual ela aparece, é irrelevante quando referenciando ou
	acessando aquela chave.

*/

// exemplo de interação for...in
// for (let user in user) {
// 	console.log(user);
// }

/*

	Nós definimos uma função countOnline a qual aceita um argumento (um objeto
	users). Use a declaração for...in dentro dessa função para iterar o objeto
	users passado para a função, e retorne o número de users o qual possuam a
	propriedade online definida como true. Um exemplo de um objeto users o qual
	pode ser passado para countOnline é mostrado abaixo. Cada usuário terá a
	propriedade online com um valor true ou false.

	{
	  Alan: {
	    online: false
	  },
	  Jeff: {
	    online: true
	  },
	  Sarah: {
	    online: false
	  }
	}

*/

const users = {
	Alan: {
		online: false
	},
	Jeff: {
		online: true
	},
	Sarah: {
		online: false
	}
};

function countOnline(usersObj) {
	let result = 0;
	for (let user in usersObj) {
		if (usersObj[user].online === true) {
			result++;
		}
	}
	return result;
}

console.log(countOnline(users));
