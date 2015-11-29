var numero = 0
$(document).ready(function(){
	$('.exemplo').mousemove(function(){
		$('.localizacao').text(numero++);
	});
});