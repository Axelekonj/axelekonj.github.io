$(document).ready(function() {
	$('.header__slider').slick({
		prevArrow: '.prev',
		nextArrow: '.next',
		infinit: false,
		dots: true,
	});
	$('.biography__face-slider__inner').slick({
		slidesToShow: 5,
		infinit: false,
		responsive: [
			{
				breakpoint: 425,
				settings: {
					slidesToShow: 3,
					// arrows: false,
				}
			}
		]
	});
});