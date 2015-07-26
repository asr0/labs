``` js
/*
	Remove o último item do array e retorna-o.

	PS: Esse método age no array principal.
*/

var arr = ['João', 'carlo', 'menezes'];
arr.pop(); // menezes

console.log ( arr ); // ["João", "carlo"]

// Salve o valor excluído em uma variável.

var arrTwo = ['Marcos', 'oliveira', 'santos'];
var removeLast = arrTwo.pop();

console.log( removeLast );