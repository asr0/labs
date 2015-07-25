``` js
/*
	Concatena elementos para dentro do array. Ao ser concatenado ele retorna seu novo array.
	
	PS: Esse metodo não reflete no array principal. 
*/

var arr = ['Nome', 'Idade', 'Cidade', 'Estado'];
arr.concat('Profissão'); // ['Nome', 'Idade', 'Cidade', 'Estado', 'Profissão']
	
// Como ele não reflete no array principal, criaremos uma variável para retornalos.

var arr2 = ['Camarão', 'Arroz', 'Carne', 'Feijão'];
var concatArray = arr.concat('Milho', 'Macarrão'); // ['Nome', 'Idade', 'Cidade', 'Estado', 'Milho', 'Macarrão']

console.log( concatArray ); // ['Nome', 'Idade', 'Cidade', 'Estado', 'Milho', 'Macarrão']