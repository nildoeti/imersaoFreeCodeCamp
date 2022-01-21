/*
	Reutilizar código JavaScript usando import

	import te permite escolher quais partes carregar de um arquivo ou módulo.
	Na lição anterior, os exemplos exportaram a função add do arquivo
	math_functions.js. Você pode importá-la e usá-la em outro arquivo assim:

	import { add } from './math_functions.js';

	Aqui, import encontrará a função add no arquivo math_functions.js, importar
	apenas essa função e ignorar o resto. O ./ diz ao import para procurar pelo
	arquivo math_functions.js no mesmo diretório que o arquivo atual. O caminho
	relativo do arquivo (./) e a extensão do arquivo (.js) são necessários ao
	usar import dessa forma.

	Você pode importar mais de um item do arquivo ao adicioná-los na instrução
	import dessa forma:

	import { add, subtract } from './math_functions.js';

	Adicione a instrução import apropriada que permitirá o arquivo atual usar
	as funções uppercaseString e lowercaseString que você exportou na lição
	anterior. As funções estão em um arquivo chamado string_functions.js, o qual
	está no mesmo diretório que o arquivo atual.

*/

import {uppercaseString} from './usarExportacaoParaCompartilharUmBlocoDeCodigo.js';