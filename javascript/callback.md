``` js
function myFunc(number1, number2){
	return function(callback){
		return callback();
	};
}
function callback(){
	return number1 + number2;
}
