
$('.radioblock').find('.radio').each(function(){
	$(this).click(function(){
		var valueRadio = $(this).find('.text-value').html();
		$(this).parent().find('.radio').removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('input').val(valueRadio);
	});
});