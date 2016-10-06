const navigation = document.getElementsByClassName('js-header-nav')[0];
const menuEl = document.getElementsByClassName('js-header-list')[0]

navigation.addEventListener('click', function (event) {
    const srcElementClass = event.target.className;
    console.log("CLICK")
	if (srcElementClass.match('js-nav-toggle')) {
		menuEl.classList.toggle('header__list--mobile')
	} else {
		menuEl.classList.add('header__list--mobile')
	}
});