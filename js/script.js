
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

//burger
let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', function (e) {
	let menu = document.querySelector('.header__menu');
	let burger = document.querySelector('.burger');
	let body = document.querySelector('body');
	menu.classList.toggle('_active');
	burger.classList.toggle('_active');
	body.classList.toggle('_lock');
})
//burger

//ibg
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (let i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();
//ibg

//swiper
const swiper = new Swiper('.our-slider',{
	pagination: {
		el: '.our-slider__pagination',
		clickable: true,
	},
	grabCursor: true,
	touchRatio: 1,
	touchAngle: 45,
	simulateTouch: true,
	slideToClickedSlide: true,
	mousewheel: {
		sesitivity: 1,
		eventsTarget: ".our-slider",
	},
	slidesPerView: 3,
	watchOverflow: true,
	spaceBetween: 29,
	initialSlide: 1,
	loop: true,
	slidesPerGroup: 3,
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		570: {
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
		992: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
});
//swiper