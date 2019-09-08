$(function() {
    if(jQuery('.styled').length) {
        $('.styled').styler();
    }
 $('.styled').styler();
//slider bio
        if(jQuery('.items-slider').length) {
            $('.items-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: false,
            //   prevArrow: '<div class="arrow-prev"></div>',
            //   nextArrow: '<div class="arrow-next"></div>'
            responsive: [
                {
                  breakpoint: 1239,
                  settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '100px',
                  }
                },
                {
                  breakpoint: 630,
                  settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '80px',
                  }
                },
                {
                  breakpoint: 570,
                  settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '10%',
                  }
                }
              ]
            });
        }
//corporate-slider
        if(jQuery('.corporate-slider').length) {
            $('.corporate-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            dots: false,
            prevArrow: '<div class="arrow-prev"></div>',
            nextArrow: '<div class="arrow-next"></div>',
            responsive: [
                {
                  breakpoint: 15000,
                  settings: "unslick"
                },
                {
                  breakpoint: 1239,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: true,
                    dots: false,
                    prevArrow: '<div class="arrow-prev"></div>',
                    nextArrow: '<div class="arrow-next"></div>',
                  }
                }
              ]
            });
        }

//.corporate__partners-slider

        if(jQuery('.corporate__partners-slider').length) {
            $('.corporate__partners-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            arrows: true,
            dots: false,
            prevArrow: '<div class="arrow-prev"></div>',
            nextArrow: '<div class="arrow-next"></div>',
            responsive: [
                {
                  breakpoint: 1239,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
            });
        }
//sertificate__gifts-slider
if(jQuery('.sertificate__gifts-slider').length) {
    $('.sertificate__gifts-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    prevArrow: '<div class="arrow-prev"></div>',
    nextArrow: '<div class="arrow-next"></div>',
    responsive: [
        {
          breakpoint: 15000,
          settings: "unslick"
        },
        {
          breakpoint: 1239,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            dots: false,
            prevArrow: '<div class="arrow-prev"></div>',
            nextArrow: '<div class="arrow-next"></div>',
          }
        }
      ]
    });
}
//sertificate__atrib
if(jQuery('.sertificate__atribs').length) {
    $('.sertificate__atribs').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<div class="arrow-prev"></div>',
    nextArrow: '<div class="arrow-next"></div>',
    responsive: [
        {
          breakpoint: 1239,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false,
            prevArrow: '<div class="arrow-prev"></div>',
            nextArrow: '<div class="arrow-next"></div>',
          }
        }
      ]
    });
}
//index__soon
if(jQuery('.index__soon').length) {
    $('.index__soon').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<div class="arrow-prev"></div>',
    nextArrow: '<div class="arrow-next"></div>',
    asNavFor: ".index-map",
    responsive: [
        {
          breakpoint: 1239,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false,
            prevArrow: '<div class="arrow-prev"></div>',
            nextArrow: '<div class="arrow-next"></div>',
          }
        }
      ]
    });
}
if(jQuery('.index-map').length) {
    $('.index-map').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    asNavFor: ".index__soon",
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1239,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
            focusOnSelect: true,
          }
        }
      ]
    });
}
if(jQuery('.index__example-slider').length) {
    $('.index__example-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<div class="arrow-prev"></div>',
    nextArrow: '<div class="arrow-next"></div>',
    asNavFor: ".index__soon",
    responsive: [
        {
          breakpoint: 1239,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false,
            prevArrow: '<div class="arrow-prev"></div>',
            nextArrow: '<div class="arrow-next"></div>',
          }
        }
      ]
    });
}   

if(jQuery('.accordeon').length) {
  // hide all content
  $('.accordeon__content').hide();
  
  $('.accordeon__title').click(function(){
    $(this).parent().toggleClass('active').siblings().removeClass('active');
    $('.accordeon__content').slideUp();
    
    if(!$(this).next().is(":visible")) {
			$(this).next().slideDown();
		}
  });
}



// MAP
    
ymaps.ready(init);
function init(){     
   var myMap = new ymaps.Map("map", {
        center: [55.752156, 37.588548],
        zoom: 15
    }),
    
    // Создаем метку с помощью вспомогательного класса.
    myPlacemark1 = new ymaps.Placemark([55.752156, 37.588548], {
     // Свойства.
     // Содержимое иконки, балуна и хинта.
     balloonContentBody: 'Квиzzов',
    balloonContentFooter: 'БЦ «Восток» ул. Новый Арбат, 19',
    hintContent: 'Квиzzов'
 }, {
     // Опции.
     // Своё изображение иконки метки.
    //  iconLayout: 'default#imageWithContent',
    //  iconImageHref: 'img/icons/marker.png',
     // Размеры метки.
    //  iconImageSize: [66, 100]
 });

// Добавляем все метки на карту.
myMap.geoObjects.add(myPlacemark1);
myMap.behaviors.disable('scrollZoom');

};
 // MAP

});



document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
    });
//tabs
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.header__tabs > li");
    function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
        var anchorReference = tabClickEvent.target;
        console.log(anchorReference);
        var activePaneId = anchorReference.getAttribute("href");
        console.log(activePaneId);
        var activePane = document.querySelector(activePaneId);
        console.log(activePaneId);
		activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}





});
