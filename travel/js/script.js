console.log('Самооценка своей работы:\n 1.Вёрстка валидная\n 2.Вёрстка семантическая\n 3.Вёрстка соответствует макету\n 4.Все требования к css соблюдены\n 5.Интерактивность, реализуемая через css\n');
console.log('Самооценка своей работы:\n 1.Вёрстка соответствует макету. Ширина экрана 390px\n 2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется\n 3.На ширине экрана 390рх и меньше реализовано адаптивное меню\n');

// Menu burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuBodyList = document.querySelector('.menu__body-list');
const menu = document.querySelector('.wrapper');
if(iconMenu){
	iconMenu.addEventListener("click", (e) =>{
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

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

			if(iconMenu.classList.contains('_active')){
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}