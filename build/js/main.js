function slider(elementClass, prevBtnClass, nextBtnClass, activeClass) {
	var sliderItem = document.querySelectorAll('.' + elementClass);
	var prevArrow = document.querySelector('.' + prevBtnClass);
	var nextArrow = document.querySelector('.' + nextBtnClass);
	var firstSlide = sliderItem[0];
	var lastSlide = sliderItem[sliderItem.length - 1];

	nextArrow.addEventListener('click', function() {
		for(var i = 0; i < sliderItem.length; i++) {
			var currentSlide = sliderItem[i];
			var nextSlide = currentSlide.nextElementSibling;

			if(currentSlide.classList.contains(activeClass)) {
				currentSlide.classList.remove(activeClass);
	            if(currentSlide == lastSlide) {
	              firstSlide.classList.add(activeClass);
	            } else {
	              nextSlide.classList.add(activeClass);
	            }
	            break;
			}
		}
	});

	prevArrow.addEventListener('click', function() {
		for(var i = 0; i < sliderItem.length; i++) {
			var currentSlide = sliderItem[i];
			var prevSlide = currentSlide.previousElementSibling;

			if(currentSlide.classList.contains(activeClass)) {
				currentSlide.classList.remove(activeClass);
	            if(currentSlide == firstSlide) {
	              lastSlide.classList.add(activeClass);
	            } else {
	              prevSlide.classList.add(activeClass);
	            }
	            break;
			}
		}
	});
}

slider('reviews-slider__item', 'reviews-slider__arrow--prev', 'reviews-slider__arrow--next', 'reviews-slider__item--active');
slider('photo-slider__item', 'photo-slider__arrow--prev', 'photo-slider__arrow--next', 'photo-slider__item--active');

//What we do texts
;(function(){
  var active = 'we-do__texts-item--active'
  var item = '.we-do__texts-item'

  document.querySelectorAll('.we-do__texts-heading-block').forEach(function(el) {
    el.addEventListener('click', function(evt) {
      if(!this.closest(item).classList.contains(active)) {
        document.querySelector('.'+active).classList.remove(active);
        this.closest(item).classList.add(active);
      }
    })
  })
}());

//Scroll
$(document).ready(function(){
	$('.page-header__page-nav').on('click','a', function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за N мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

//onScreen

$(function() {
  var about1 = new OnScreen({
  	debounce: 100
  });

  about1.on('enter', '#aboutUsScroll', function() {
    aboutUsImg1.classList.add('onScreen');
  });

  var about2 = new OnScreen({
  	debounce: 400
  });

  about2.on('enter', '#aboutUsScroll', function() {
    aboutUsImg2.classList.add('onScreen');
  });

  var about3 = new OnScreen({
  	debounce: 700
  });

  about3.on('enter', '#aboutUsScroll', function() {
    aboutUsImg3.classList.add('onScreen');
  });
});