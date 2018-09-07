import 'slick-carousel';
$(document).ready(function() {
  // слайдер
  $('.slick__slider').slick({
    speed: 800,
    prevArrow:
            '<button class="prev"></button>',
    nextArrow:
            '<button class="next"></button>'
  });
});
