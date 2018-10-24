var navMain = document.querySelector('.header-menu__nav');
var navToggle = document.querySelector('.header-menu__toggle');

navMain.classList.remove('header-menu__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header-menu__nav--closed')) {
		navMain.classList.remove('header-menu__nav--closed');
		navMain.classList.add('header-menu__nav--opened');
	} else {
		navMain.classList.add('header-menu__nav--closed');
		navMain.classList.remove('header-menu__nav--opened');
	}
});