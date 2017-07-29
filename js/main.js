//Slider 1
(function () {
	var sliderItem = document.querySelectorAll(".reviews-slider__item");
	var prevArrow = document.querySelector(".reviews-slider__arrow--prev");
	var nextArrow = document.querySelector(".reviews-slider__arrow--next");
	var firstSlide = sliderItem[0];
	var lastSlide = sliderItem[sliderItem.length - 1];

	nextArrow.addEventListener("click", function() {
		for(var i = 0; i < sliderItem.length; i++) {
			var currentSlide = sliderItem[i];
			var nextSlide = currentSlide.nextElementSibling;

			if(currentSlide.classList.contains("reviews-slider__item--active")) {
				currentSlide.classList.remove("reviews-slider__item--active");
	            if(currentSlide == lastSlide) {
	              firstSlide.classList.add("reviews-slider__item--active");
	            } else {
	              nextSlide.classList.add("reviews-slider__item--active");
	            }
	            break;
			}
		}
	});

	prevArrow.addEventListener("click", function() {
		for(var i = 0; i < sliderItem.length; i++) {
			var currentSlide = sliderItem[i];
			var prevSlide = currentSlide.previousElementSibling;

			if(currentSlide.classList.contains("reviews-slider__item--active")) {
				currentSlide.classList.remove("reviews-slider__item--active");
	            if(currentSlide == firstSlide) {
	              lastSlide.classList.add("reviews-slider__item--active");
	            } else {
	              prevSlide.classList.add("reviews-slider__item--active");
	            }
	            break;
			}
		}
	});
}());

//Slider 2
(function () {
	var sliderItem = document.querySelectorAll(".photo-slider__item");
	var prevArrow = document.querySelector(".photo-slider__arrow--prev");
	var nextArrow = document.querySelector(".photo-slider__arrow--next");
	var firstSlide = sliderItem[0];
	var lastSlide = sliderItem[sliderItem.length - 1];

	nextArrow.addEventListener("click", function() {
		for(var i = 0; i < sliderItem.length; i++) {
			var currentSlide = sliderItem[i];
			var nextSlide = currentSlide.nextElementSibling;

			if(currentSlide.classList.contains("photo-slider__item--active")) {
				currentSlide.classList.remove("photo-slider__item--active");
	            if(currentSlide == lastSlide) {
	              firstSlide.classList.add("photo-slider__item--active");
	            } else {
	              nextSlide.classList.add("photo-slider__item--active");
	            }
	            break;
			}
		}
	});

	prevArrow.addEventListener("click", function() {
		for(var i = 0; i < sliderItem.length; i++) {
			var currentSlide = sliderItem[i];
			var prevSlide = currentSlide.previousElementSibling;

			if(currentSlide.classList.contains("photo-slider__item--active")) {
				currentSlide.classList.remove("photo-slider__item--active");
	            if(currentSlide == firstSlide) {
	              lastSlide.classList.add("photo-slider__item--active");
	            } else {
	              prevSlide.classList.add("photo-slider__item--active");
	            }
	            break;
			}
		}
	});
}());

//What we do texts
;(function(){
  var active = "we-do__texts-item--active"
  var item = ".we-do__texts-item"

  document.querySelectorAll(".we-do__texts-heading-block").forEach(function(el){
    el.addEventListener("click", function(evt) {
      if(!this.closest(item).classList.contains(active)) {
        document.querySelector("."+active).classList.remove(active);
        this.closest(item).classList.add(active);
      }
    })
  })
}());

//Scroll
$(document).ready(function(){
	$(".page-header__page-nav").on("click","a", function (event) {
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