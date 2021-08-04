$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');

    //if burger is black

  });

  //scroll btn color248, 244, 244
  // const [red, green, blue] = [248, 244, 244]
  // const section1 = document.querySelector('.product__show-two')

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 1050) {
  //     $('.header__burger').addClass('colorChange')
  //        $('.header__burger.active').removeClass('colorChange')
  //   }
  //   if ($(this).scrollTop() < 1050 || $(this).scrollTop() > 1600) {
  //     $('.header__burger').removeClass('colorChange')
  //   }
  // });

  //if dark mode (projects)
  if (window.location.href.includes('projects')) {
    // $('body').
  }
});