``` js
/*
	O método length retorna a quantidade de itens do array.
*/
var arr = [ 
	'JoãoSilva',
	'JoãoJunior',
	'SilvaJoão',
	'SilvaJunior',
	'JuniorJoão',
	'JuniorSilva'
];

console.log( 'A variável Arr tem', arr.length, 'itens!' ); // 6


/*
	Length, por padrão, não retorna a quantidade de itens que um objeto contém. Mas 
	com a propriedade keys(Object.keys(obj)), podemos usar a criatividade e converter o objeto em
	Array e verificar quantos itens existente.
*/
var obj = {
	name: 'Victor',
	lastNome: 'Andrade',
	state: 'São Paulo'
};
console.log('A quantidade de item que existe no objeto é:',Object.keys(obj).length);