/*
	Exibir uma coleção de discos

	Você recebeu um objeto literal representando uma parte da sua coleção de 
	álbuns musicais. Cada álbum possui um número de id único como sua chave e 
	diversas outras propriedades. Nem todos os álbuns possuem informações 
	completas.

	Você começa com uma função updateRecords que recebe um objeto literal, 
	records, contendo a coleção de álbuns musicais, um id, uma prop(like artist 
	ou tracks) e um value. Complete a função usando as regras abaixo para 
	modificar o objeto passado para a função.

	    A função precisa sempre retornar o objeto de coleção de discos completo.
	    Se prop não for tracks e value não for uma string vazia, atualize ou 
	    defina aquela prop do álbum como value.
	    Se prop for tracks mas o álbum não tiver uma propriedade tracks, crie 
	    um array vazio e adicione o value nesse array.
	    Se prop for tracks e value não for uma string vazia, adicione value ao 
	    final do array existente de tracks do álbum.
	    Se value for uma string vazia, remova a propriedade prop recebida do 
	    álbum.

	Observação: uma cópia do objeto recordCollection é usada para testes.
*/

// const recordCollection = {
// 	2548: {
// 		albumTitle: 'Slippery When Wet',
// 		artist: 'Bom Jovi',
// 		tracks: ['Let it rock', 'You give love a bad name']
// 	},

// 	2468: {
// 		albumTitle: '1999',
// 		artist: 'Prince',
// 		tracks: ['1999', 'Litte red covertte']
// 	},

// 	1245: {
// 		artist: 'Robert Palmer',
// 		tracks: []
// 	},

// 	5439: {
// 		albumTitle: 'ABBA gold'
// 	}
// };

// function updateRecords(records, id, prop, value) {
// 	// body...
// 	if (prop !== 'tracks' && value) {
// 		records[id][prop] = value;
// 	} else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
// 		records[id][prop] = [value]
// 	} else if (prop === 'tracks' && value !== '') {
// 		records[id][prop].push(value);
// 	} else if (value === '') {
// 		delete records[id][prop];
// 	}

// 	return records;
// }

// const result1 = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// console.log(result1);


// solução 2
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

const result1 = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(result1);
