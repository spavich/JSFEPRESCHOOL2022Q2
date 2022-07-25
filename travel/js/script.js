'use strict';

document.addEventListener('DOMContentLoaded', function(){
	
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

	// Pop Up
	const btns = document.querySelectorAll('.openPopUp'),
				popUpOverlay = document.querySelector('.popUps__overlay'),
				popUps = document.querySelectorAll('.popUp');

	/* Открытие модальных окон при нажатии кнопки */
	btns.forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			let path = e.currentTarget.getAttribute('data-path');

			popUps.forEach((el) => {
				el.classList.remove('popUp--visible');
			});

			document.querySelector(`[data-target="${path}"]`).classList.add('popUp--visible');
			popUpOverlay.classList.add('popUp-overlay--visible');

			if(popUpOverlay.classList.contains('popUp-overlay--visible')){
				document.body.classList.add('_lock');
			}
			if(menuBody.classList.contains('_active')){
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
		});
	});
	/* Модальное окно закрывается при нажатие клавиши Esc */
	document.addEventListener('keydown', (e) =>{
		if(e.code === "Escape" && popUpOverlay.classList.contains('popUp-overlay--visible')){
			popUpOverlay.classList.remove('popUp-overlay--visible');
			document.body.classList.remove('_lock');
			popUps.forEach((el) => {
				el.classList.remove('popUp--visible');
			});
		}
	});
	/* Модельное окно закрывается при клике не в рамках модального окна */
	popUpOverlay.addEventListener('click', (e) => {
		if (e.target == popUpOverlay) {
			popUpOverlay.classList.remove('popUp-overlay--visible');
			document.body.classList.remove('_lock');
			popUps.forEach((el) => {
				el.classList.remove('popUp--visible');
			});
		}
	});
	//

	const email = document.querySelector('.popUp__form-email');
	const password = document.querySelector('.popUp__form-password');
	const button = document.querySelector('.popUp__form-button');

	function alertDataForm (btn, ...input){
		btn.addEventListener('click', (e) =>{
			e.preventDefault();
			alert(`Your e-mail address: ${input[0].value}\nYour password: ${input[1].value}`);
		});
	}
	alertDataForm(button, email, password);

	// Slider
	$('.slider__items').slick({
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		speed: 300,
		centerMode: true,
		variableWidth: true,

		responsive: [
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				}
			}
		]
	});
	
	
});