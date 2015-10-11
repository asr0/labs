

// Utilizando array
var counter = 0;
var arr = [];

do {
	counter += 2;
	arr.push(counter);
} while( counter < 20 );

console.log( 	
	'Esse array tem ' + arr.length + ' itens! \n',
	'Impressão do meu Array é: ' + arr
);