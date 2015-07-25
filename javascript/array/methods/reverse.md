``` js
/*
	Inverte os itens do array, quem é índice zero [0], passa a ser o último item do array.
	Quem é o último passa a ser o primeiro.

	PS: esse metodo sofre efeito colateral, altera no arr principal
*/

var arr = [ 'Anderson', 'dos', 'santos', 'menezes'];
arr.reverse(); // [ 'menezes','santos', 'dos','Anderson' ]
