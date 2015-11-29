$(document).ready(function(){
	$('.elemento-1').mouseenter(mEnter);
	$('.elemento-1').mouseleave(mLeave);

	function mEnter(){
		$('.elemento-4').slideUp('slow');
	}

	function mLeave(){
		$('.elemento-4').slideDown('slow');
	}
});