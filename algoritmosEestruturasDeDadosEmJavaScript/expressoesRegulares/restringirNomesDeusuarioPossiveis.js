/*
	Restringir nomes de usuário possíveis

	Nomes de usuário (usernames) são usados em toda a Internet. São o que fazem
	com que tenham uma identidade única em seus sites favoritos.

	Você precisa verificar todos os usernames em um banco de dados. Existem
	algumas regras que os usuários precisam seguir quando criam os seus
	usernames.

	    Nomes de usuário só podem conter caracteres alfanuméricos.

	    Os números, se algum, precisam estar no fim da string. Pode haver zero
	    ou mais números. Usernames não podem começar com números.

	    As letras podem ser maiúsculas ou minúsculas.

	    O tamanho de nomes de usuários precisa ser pelo menos dois. Um username
	    de dois caracteres só pode conter letras.


		Modifique a regex userCheck para que inclua as regras listadas.

*/

// soluo 1
let username = "JackOfAllTrades";
// let userCheck = /change/; // Altere esta linha
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result);

/*
	Explicação do código

	    ^ - incio da entrada
	    [a-z] - o primeiro caractere  uma letra
	    [a-z]+ - os seguintes caracteres são letras
	    \d*$ - entrada termina com 0 ou mais dígitos | - ou
	    ^[a-z] - o primeiro caractere é uma letra
	    \d\d+ - os seguintes caracteres são 2 ou mais dígitos
	    $ - end if input

*/

const userCheckTwo= /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let resultTwo = userCheckTwo.test(username);
console.log(resultTwo);

/*
	Explicação do código

	     ^ - início da entrada
	     [a-z] - o primeiro caractere é uma letra
	     [0-9]{2,0} - termina com dois ou mais números | - ou
	     [a-z]+ - tem uma ou mais letras ao lado
	     \d* - e termina com zero ou mais números
	     $ - fim da entrada
	     i - ignora maiúsculas e minúsculas de entrada 
*/