$(document).ready(function () {
  let hml = $('.header-menu').find('.header-menu-item a');
  $('.header-menu-item').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  //slick main carousel

  $('.home-main-slider').slick({
    dots: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  });

});



