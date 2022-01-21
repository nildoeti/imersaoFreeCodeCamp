/*
	Usar * para importar tudo de um arquivo

	Suponha que você tem um arquivo e deseja importar todo o conteúdo dele no
	arquivo atual. Isso pode ser feito com a sintaxe import * as. Aqui está um
	exemplo onde todo o conteúdo de um arquivo chamado math_function.js é
	importado em um arquivo no mesmo diretório:

	import * as myMathModule from "./math_functions.js";

	A instrução import acima criará um objeto chamado myMathModule. Esse nome é
	totalmente arbitrário. Você pode escolher qualquer outro nome que seja
	apropriado para sua aplicação. O objeto conterá todas as exportações do
	arquivo math_functions.js. Dessa forma, você pode acessar as funções
	exportadas da mesma forma que você acessa as propriedades de um objeto.
	Aqui está um exemplo de como você pode usar as funções add e subtract que
	foram importadas:

	myMathModule.add(2,3);
	myMathModule.subtract(5,3);

*/

// exemplo de como fazer a exportacao de todos os mdulos de um arquivo
import * as myMathModule from "./usarExportacaoParaCompartilharUmBlocoDeCodigo.js";


/*
	Desafio

	O código nesse desafio requer o conteúdo do arquivo: string_functions.js, o
	qual está no mesmo diretório que o arquivo atual. Use a sintaxe import * as
	para importar tudo do arquivo em um objeto chamado stringFunctions.
*/

import * as 'stringFunctions' from "./stringFunctions.js";

stringFunctions.uppercaseString('Hello');
stringFunctions.lowerCaseString('World');

