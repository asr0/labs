var Person = {
	name: 'Elias',
	lastName: 'Ferreira',
	age: 42,
	city: 'Campinas',
	married: false
};

for ( var propiedade in Person ){
	console.log(propiedade);
}
// O retorno desse loop é:

/*
	name
	lastName
	age
	city
	married
*/

for ( var propriedade in Person ){
	console.log( Person[propriedade] );
}
// O retorno desse loop é:

/*
Elias
Ferreira
42
Campinas
false
*/
for ( var propiedade in Person ){
	console.log( propiedade + ': ' + Person[propiedade]);
}
// O retorno desse loop é:

/*
name: Elias
lastName Ferreira
age: 42
city: Campinas
married: false
*/