/* 
	O método split() quebra a string, transformando a string em um array.
	Onde ela deve quebrar, fica ao seu criterio passando-o através de parâmetros.
	No primeiro exemplo abaixo (myVar) qebrei ela em cada letra, formando
	um array gigante com todas as letras da varíável.
	No segundo exemplo, quebrei as variáveis em cada virgula, formando um array de 
	com variás frutas.
*/

var myVar = 'Essa minha variável vai ser quebrada em vários pedaço';
var myVar2 = 'Banana, Morango, Uvas, Laranja, Abacaxi';

var resultMyVar = myVar.split('');
var resultMyVar2 = myVar2.split(',');

console.log( resultMyVar );
/*
["E", "s", "s", "a", " ", "m", "i", "n", "h", "a", " ", "v", "a", "r", "i", "á", "v", "e", "l", " ", "v", "a", "i", " ", "s", "e", "r", " ", "q", "u", "e", "b", "r", "a", "d", "a", " ", "e", "m", " ", "v", "á", "r", "i", "o", "s", " ", "p", "e", "d", "a", "ç", "o"]
*/

console.log( resultMyVar2 );
/*
	["Banana", " Morango", " Uvas", " Laranja", " Abacaxi"]
*/
