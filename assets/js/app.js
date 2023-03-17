// social media icons
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

// slider option
$(document).ready(function(){
    $('.slider').bxSlider({
		pager: false
	});
});

// hide header nav if window is less than 980px
$(window).on('load', function() {
	if ($(window).width() < 980) {
		$('header nav').slideUp();
	} else {
		$('header nav').show();
	}
});

$(document).ready(function() {
	var open__nav = $('.open__nav');
	var nav__wrap = $('.nav__wrap');
	var nav = $('header nav');

	$(open__nav).on('click', function() {
		$(this).removeAttr('href');
		$(this).toggleClass('open');

		$(nav__wrap).toggleClass('nav__open');

		if($(nav__wrap).hasClass('nav__open')) {
			$(nav).slideDown();
		} else {
			$(nav).slideUp();
		}
	});
});