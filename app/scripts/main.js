$(document).ready(function () {
  let hml = $('.header-menu').find('.header-menu-item a');
  $('.header-menu-item a').on('click', function () {
    $(this).closest('.header-menu-item a').removeClass('active');
    $(this).addClass('active');
  });
});
