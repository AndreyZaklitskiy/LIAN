$(document).ready(function () {
  let hml = $('.header-menu').find('.header-menu-item a');
  $('.header-menu-item').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

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

    /*prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',*/

  $('.waterfall').masonry({
    // options
    itemSelector: '.waterfall-item',
    columnWidth: 360,
    gutter: 15
  });

  $('input[type="range"]').rangeslider();

});



