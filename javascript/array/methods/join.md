``` js
/*
	Junta todos os itens que estiver no Array. No parâmetro pode-se passar o seu espaçamento,
	por exemplo, join( ' - ' ). O espaçamento de um item pra outro vai ser um espaço mais hífen
	e outro espaço. Por padrão o parâmetro do método join poem uma virgula para separar um item
	do outro. 

	PS: Não existe efeitos colaterais, não altera nada no array principal.
*/

var arr = [ 'Vamos', 'ao', 'parque', 'mais tarde !'];

console.log( arr.join(' ') ); 