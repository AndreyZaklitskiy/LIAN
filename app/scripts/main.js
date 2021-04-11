$(document).ready(function () {
  if ($('.swiper-container').length) {
    new Swiper('.swiper-container', {
      grabCursor: true,
      autoHeight: true,
      pagination: {
        el: '.swiper-scrollbar',
        clickable: true,
        renderBullet: function (index, className) {
          return `<button class="${className}"></button>`;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

  }

  if($('.gallery').length) {
    new $('.gallery__block').masonry({
      // options
      itemSelector: '.gallery__block-item',
      columnWidth: '.gallery__block-item',
      gutter: 15,
      fitWidth: true,
      percentPosition: false
    });
  }


});



//

 const input = document.querySelectorAll('.range-slider__input'),
       thumb = document.querySelectorAll('.range-slider__thumb'),
       range = document.querySelectorAll('.range-slider__range'),
       sliderValue = document.querySelectorAll('.range-slider__value');

 for(let i = 0; i< input.length; i++){
   function setShumbValue() {
     let _this = input[i],
       min = parseInt(_this.min),
       max = parseInt(_this.max);
     _this.value = Math.max(parseInt(_this.value), parseInt(input[i].value));
     let percent = ((_this.value - min) / (max - min))*100;
     thumb[i].style.left = percent + '%';
     range[i].style.right = (100 - percent) + '%';
     sliderValue[i].textContent = Math.round(percent) + '%';
   }
   setShumbValue();
   input[i].addEventListener('input', setShumbValue);
 }


