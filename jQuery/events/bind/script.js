$(document).ready(function(){
	$('.click-here').bind('click', function(){
		$('.par').css('display', 'block');
	});

	$('.click-here2').bind(
		{
			click: function(){
				$('.par')
					.css('display', 'block')
					.text('Você acabou de clicar no método bind passando objetos como parâmetro')
			},
			mouseover: function(){
				$('.par')
					.css('display', 'block')
					.text('Você acabou de dar hover no método bind passando objetos como parâmetro')
			}
		});
});