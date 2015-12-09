$(document).ready(function(){
	var btnFirst = 0;
	var btnTwo = 0;

	$('.btn-1').click(function(){
		btnFirst++;
		$('.btn-info').text('Retorno botão 1 = ' + btnFirst);
	});

	$('.btn-2').click(function(){
		btnTwo++;
		$('.btn-danger').text('Retorno botão 2 = ' + btnTwo);
		$('.btn-1').trigger('click');
	});
});