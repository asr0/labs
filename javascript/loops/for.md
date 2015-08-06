``` js
/*
 For é uma estrutura de repiticação, onde ele pecorre o instrução passada.
 Uma analogia ao for e a vida real seria uma corrida. Essa corrida, seu percusso 
 será de 10 quilometro, a cada 1 quilometro existe uma faixa que você tem que
 pegar. Você passa por todos e obtem a faixa. O mesmo acontece com o for
*/

// Nesse exemplo, o loop for percorre todos os itens de seu array e mostra no console


// Exemplo com Array
var arr = [ 1,2,3,4,5,6,7,8,9,10];

for( var i = 1; i <= arr.length; i++  ){
	console.log(i);
}

// Exemplo com String

var str = 'Anderson Menezes';
for ( var i = 0; i < str.length; i++ ){
	console.log( str.charAt(i) );
}