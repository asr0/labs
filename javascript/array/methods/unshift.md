``` js
/*
	Adiciona item no começo do array. Ao adicionar o métedo retorna o length
	[Quantidade de item do array].

	PS: Esse métedo altera o array principal. Não cria um novo array para adicionar.
*/

var arr = [ 'oliveira', 'santos', 'ferreira'];
arr.unshift('Roberto'); //4


console.log( arr ); // ["Roberto", "oliveira", "santos", "ferreira"]
