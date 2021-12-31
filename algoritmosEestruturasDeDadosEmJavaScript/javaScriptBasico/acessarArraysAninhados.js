/*
	Acessar arrays aninhados

	Como vimos em exemplos anteriores, objetos podem conter tanto objetos 
	aninhados quanto arrays aninhados. Semelhante ao acesso de objetos 
	aninhados, a notação de colchetes pode ser encadeada para se acessar arrays 
	aninhados.

	Aqui está um exemplo de como se acessar um array aninhado:

	const ourPets = [
	  {
	    animalType: "cat",
	    names: [
	      "Meowzer",
	      "Fluffy",
	      "Kit-Cat"
	    ]
	  },
	  {
	    animalType: "dog",
	    names: [
	      "Spot",
	      "Bowser",
	      "Frankie"
	    ]
	  }
	];

	ourPets[0].names[1];
	ourPets[1].names[0];

	ourPets[0].names[1] seria a string Fluffy e ourPets[1].names[0] seria a 
	string Spot.
*/

const ourPets = [
	{
		animalType: 'cat',
		names: ['Meowzer', 'Fluffy', 'Kit-Cat']
	},
	{
		animalType: 'dog',
		names: ['Spot', 'Browser', 'Frankie']
	}
];

// exemplo 1
const result1 = ourPets[0];
console.log(result1); // { animalType: 'cat', names: [ 'Meowzer', 'Fluffy', 'Kit-Cat' ] }

// exemplo 2
const result2 = ourPets[0].names;
console.log(result2); // [ 'Meowzer', 'Fluffy', 'Kit-Cat' ]

// exemplo 3
const result3 = ourPets[0].names[0];
console.log(result3); // Meowzer

// exemplo 4
const result4 = ourPets[0].names[2];
console.log(result4); // Kit-Cat

// exemplo 5
const result5 = ourPets[0].animalType;
console.log(result5); // cat

// exemplo 6
const result6 = ourPets[0].animalType[0];
console.log(result6); // c

// exemplo 7
const result7 = ourPets[1];
console.log(result7); // { animalType: 'dog', names: [ 'Spot', 'Browser', 'Frankie' ] }

// exemplo 8
const result8 = ourPets[1].animalType;
console.log(result8); // dog

// exemplo 9
const result9 = ourPets[1].names;
console.log(result9); // [ 'Spot', 'Browser', 'Frankie' ]

// exemplo 10
const result10 = ourPets[1].names[0];
console.log(result10); // Spot

// exemplo 11
const result11 = ourPets[1].names[1];
console.log(result11); // Browser

// exemplo 12
const result12 = ourPets[1].names[2];
console.log(result12); // Frankie

// exemplo 13
const result13 = ourPets[1].names[3];
console.log(result13); // undefined

 