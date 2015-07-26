``` js
/*
	Faz tudo que o método indexOf faz, existe apenas uma diferença, ao invés de começar 
	do índice [0], o priemiro elemento do array ele começa pelo último. Começa sempre da
	direita para a esquerda. Não altera em nada, questão de preferência.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
arr.lastIndexOf(3); //2

console.log( arr.lastIndexOf(3) ); //2