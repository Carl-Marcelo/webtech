$(document).ready(function(){
	var socialButton = $('.button__social');

	$(socialButton).on('click', function() {
		var $teamItem = $(this).parent().parent().parent(($('.team__item')));

		if ($teamItem.hasClass("active")) {
			$teamItem.removeClass("active");
		} else {
			$teamItem.addClass("active");
			$teamItem.siblings(".team__item").removeClass("active");
		}
	});
});

$(document).ready(function(){
    $('.slider').bxSlider({
		pager: false
	});
});