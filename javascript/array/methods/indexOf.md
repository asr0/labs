``` js
/*
	Mostra se um elemento é existente dentro do array e retorna sua posição[ÍNDICE].
	Quando o parâmetro passado não for existente no array, o metodo exibe -1. Sempre 
	esse metodo retornar -1 o valor passado não existe. Se o valor passado for 
	existente, retorna a posição dele dentro do array.
	
	É possível passar outro parâmetro além do que vamos verificar. Essa parâmetro 
	dá o ponto de partida de qual índice queremos começar. Se deixarmos sem preencher
	ele iniciará do começo do array, do índice zero [0]  .

*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.indexOf(2); // 1

// A partir de qual índice deve começar

arr.indexOf(3,3); // -1

