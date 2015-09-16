``` js
(function(){
	'use strict';
/*
	Com o método call() podemos dizer quem é o this da função e passar parâmetros
	como se tivesse invocando uma função normalmente, porém com um acressimo, o
	PRIMEIRO parêmtro sempre será o this e os demais, argumentos/parêmtros.
*/

// Apontando quem é o this dessa função com o método call()
	function myFun(){
		return this.lastName;
	}

	var dataOfPeople = {
		firstName: 'Justino',
		lastName: 'Santana'
	};

	console.log( myFun.call(dataOfPeople) ); // Santana

// Além de apontar quem é o this pode passar passar parâmetro
	function myFunc2(sport, work, city){
		return this.firstName + ', ' + sport + ', ' + work + ', ' + city;
	}
	var dataOfPeople2 = {
		firstName: 'Luciano',
		lastName: 'Ferreira'
	}

	console.log( myFunc2.call( dataOfPeople2, 'futebol', 'developer', 'Fortaleza' ) ); 
	// Luciano, futebol, developer, Fortaleza

}());