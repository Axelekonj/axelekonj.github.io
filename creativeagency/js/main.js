$(document).ready(function() {
	$('.header__slider').slick({
		prevArrow: '.prev',
		nextArrow: '.next',
		infinit: false,
		dots: true,
	});
	$('.biography__face-slider').slick({
		prevArrow: '.slick-prev',
		nextArrow: '.slick-next',
		slidesToShow: 5,
		infinit: true,
	});
});