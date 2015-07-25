``` js
/*
	Coloca todos itens em ordem alfabética. Se for um array de número, converte em crescente.
*/

// Exemplo com números
var arr = [ 5, 9, 4, 3, 1, 2];
arr.sort(); // [1, 2, 3, 4, 5, 9]

console.log( arr.sort() ); // [1, 2, 3, 4, 5, 9]

// Exemplo com letras

var arr2 = [ 'A', 'D', 'T', 'P', 'C', 'U', 'V', 'W'];
arr.sort(); // ['A', 'C', 'D', 'P', 'T', 'U', 'V', 'W']

console.log( arr2.sort() ); // ['A', 'C', 'D', 'P', 'T', 'U', 'V', 'W'] 
