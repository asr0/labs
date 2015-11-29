$(document).ready(function(){
	$('.form-control').focusin(function(){
		$('span').css('display', 'block');
	}).focusout(function(){
		$('span').css('display', 'none');
	});
});