console.log('Самооценка своей работы:\n 1.Вёрстка валидная\n 2.Вёрстка семантическая\n 3.Вёрстка соответствует макету\n 4.Все требования к css соблюдены\n 5.Интерактивность, реализуемая через css\n');

// Navigation menu (scroll on click)
const menuLinks = document.querySelectorAll('.menu__body-link[data-goto]');
if(menuLinks.length > 0){
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick (e){
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
