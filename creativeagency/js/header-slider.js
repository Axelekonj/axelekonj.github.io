let headerOffer = document.querySelector('.header-offer'),
	slideBox = headerOffer.querySelector('.header__slider'),
	slides = slideBox.children,
	prevBtn = headerOffer.querySelector('.prev'),
	nextBtn = headerOffer.querySelector('.next'),
	dotsBox = headerOffer.querySelector('.slider-dots'),
	dots = dotsBox.children,
	slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
	if (n < 1) {
		slideIndex = slides.length;
	}
	if (n > slides.length) {
		slideIndex = 1;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('active');
	}
	slides[slideIndex - 1].style.display = ("block");
	dots[slideIndex - 1].classList.add('active');
}

function pulsSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
prevBtn.onclick = function() {
	pulsSlides(-1);
}
nextBtn.onclick = function() {
	pulsSlides(1);
}
dotsBox.onclick = function(e) {
	for(let i = 0; i < dots.length + 1; i++) {
		if (e.target.classList.contains('slider__dot') && e.target == dots[i - 1]) {
			currentSlide(i);
		}
	}
}