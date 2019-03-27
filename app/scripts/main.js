$(document).ready(function () {
  let hml = $('.header-menu').find('.header-menu-item a');
  $('.header-menu-item a').on('click', function () {
    $(this).removeClass('active');
    $(this).addClass('active');
  });
});
