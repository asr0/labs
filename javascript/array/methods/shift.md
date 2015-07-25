``` js
/*
	Remove o primeiro item do array, no caso o índice zero [0]. Também retorna o length 
	[quantidade de item do array].

	PS: Esse metodo atinge diretamente o array passado.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.shift(); // 0

console.log( arr );