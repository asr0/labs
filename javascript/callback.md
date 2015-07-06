``` js
// Example 001
function myFunc(number1, number2){
	return function(callback){
		return callback(number1, number2);
	};
}

var sum = myFunc(5,4);

function callbackFunc(number1, number2){
	return number1 + number2;
}

console.log( sum(callbackFunc) ); // 9


