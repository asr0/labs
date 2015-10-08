var arr = [ 'Matheus', false, function(){}, {}, 12 ];

arr.forEach(function(itens, index, arrayComplete){
	console.log('Item do array ' + itens + '\n O indice desse item é: ' + index);
});