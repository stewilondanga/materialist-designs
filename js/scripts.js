/*var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$("#submit").click(function() {
	 $('.container').animate({
            height: 'toggle'
        });
	$('.ty').fadeIn(500);
})
