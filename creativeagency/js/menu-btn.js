let menuButton = document.querySelector('.main__menu-btn'),
	mainMenu = document.querySelector('.main__menu');

menuButton.onclick = function() {
	if(mainMenu.classList.contains('menu--hidden')) {
		mainMenu.classList.toggle('menu--visible');
		}
	}
